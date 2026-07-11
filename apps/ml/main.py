from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import pandas as pd
from prophet import Prophet
import json
from datetime import datetime

app = FastAPI(
    title="Amdox ML Service",
    description="AI Demand Forecasting Microservice — AMX-ERP-2026-04",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory model store (use MLflow or file-based in prod)
models: dict = {}

class DataPoint(BaseModel):
    ds: str   # date string YYYY-MM-DD
    y: float  # value

class TrainRequest(BaseModel):
    sku_id: str
    data: List[DataPoint]

class PredictRequest(BaseModel):
    sku_id: str
    periods: int = 90  # forecast horizon in days

@app.get("/health")
def health():
    return {"status": "ok", "service": "amdox-ml", "models_loaded": list(models.keys())}

@app.post("/train")
def train(req: TrainRequest):
    if len(req.data) < 10:
        raise HTTPException(400, "Need at least 10 data points to train")
    
    df = pd.DataFrame([{"ds": d.ds, "y": d.y} for d in req.data])
    df["ds"] = pd.to_datetime(df["ds"])
    
    model = Prophet(
        yearly_seasonality=True,
        weekly_seasonality=True,
        daily_seasonality=False,
        changepoint_prior_scale=0.05
    )
    model.fit(df)
    models[req.sku_id] = model
    
    return {
        "sku_id": req.sku_id,
        "status": "trained",
        "data_points": len(req.data),
        "trained_at": datetime.utcnow().isoformat()
    }

@app.post("/predict")
def predict(req: PredictRequest):
    if req.sku_id not in models:
        raise HTTPException(404, f"No model found for SKU {req.sku_id}. Train first.")
    
    model = models[req.sku_id]
    future = model.make_future_dataframe(periods=req.periods)
    forecast = model.predict(future)
    
    result = forecast[["ds", "yhat", "yhat_lower", "yhat_upper"]].tail(req.periods)
    
    return {
        "sku_id": req.sku_id,
        "periods": req.periods,
        "forecast": result.to_dict(orient="records")
    }
