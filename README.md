# Amdox ERP — AI-Powered Cloud ERP Suite
**Project Code:** AMX-ERP-2026-04 | **Version:** 1.0.0

An AI-augmented, multi-tenant ERP platform delivering financial management, supply chain automation, HR & payroll, project tracking, and business intelligence.

## Tech Stack
- **Frontend:** Next.js 15 + React 19 + TypeScript + shadcn/ui + Tailwind 4
- **Backend:** NestJS 11 + Node.js 22 + TypeScript
- **Database:** PostgreSQL 17 + Prisma ORM
- **Cache/Queue:** Redis 8 + BullMQ
- **AI/ML:** Python FastAPI + Prophet (demand forecasting)
- **Deployment:** Vercel (web) + Railway (api) + Supabase (db) + Upstash (redis)

## Quick Start

### Prerequisites
- Node.js 22+, pnpm 11+, Docker Desktop, Python 3.12+

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/amdox-erp
cd amdox-erp
cp .env.example .env   # fill in your secrets
pnpm install
```

### 2. Start with Docker Compose
```bash
docker compose up -d postgres redis
```

### 3. Run DB Migrations
```bash
cd packages/db
pnpm migrate
pnpm seed
```

### 4. Start Dev Servers
```bash
pnpm dev   # starts all apps via Turborepo
```

- **API:** http://localhost:4000
- **Swagger Docs:** http://localhost:4000/api-docs
- **Frontend:** http://localhost:3000
- **ML Service:** http://localhost:8000/docs

## Project Structure
```
amdox-erp/
├── apps/
│   ├── api/          # NestJS backend (port 4000)
│   ├── web/          # Next.js 15 frontend (port 3000)
│   └── ml/           # Python FastAPI ML service (port 8000)
├── packages/
│   ├── db/           # Prisma schema + migrations
│   ├── ui/           # Shared React components
│   └── config/       # Shared ESLint, TS configs
├── .github/workflows/ # CI/CD pipelines
└── docker-compose.yml
```

## API Modules
| Module | Endpoints | Description |
|--------|-----------|-------------|
| Auth | `/api/v1/auth/*` | JWT auth, refresh tokens, RBAC |
| Finance | `/api/v1/finance/*` | GL, AP/AR, invoices, multi-currency |
| HR | `/api/v1/hr/*` | Employees, payroll, leave management |
| Supply Chain | `/api/v1/supply-chain/*` | PO, inventory, vendor management |
| AI | `/api/v1/ai/*` | Demand forecasting via Prophet |
| Dashboard | `/api/v1/dashboard/*` | BI widgets, KPI metrics |
| Projects | `/api/v1/projects/*` | Project & milestone tracking |
| Notifications | `/api/v1/notifications/*` | In-app, email, webhook |
| Audit | `/api/v1/audit/*` | Immutable audit trail |

## Environment Variables
See `.env.example` for all required variables.

## Live Demo
🔗 [https://amdox-erp.vercel.app](https://amdox-erp.vercel.app)

## Demo Video
📹 [Watch on Loom](https://loom.com/your-video-link)
