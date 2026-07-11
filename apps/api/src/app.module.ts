import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TenantsModule } from './tenants/tenants.module';
import { FinanceModule } from './finance/finance.module';
import { HrModule } from './hr/hr.module';
import { SupplyChainModule } from './supply-chain/supply-chain.module';
import { AiModule } from './ai/ai.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProjectsModule } from './projects/projects.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [
    // Config — loads .env
    ConfigModule.forRoot({ isGlobal: true }),

    // Rate limiting — sliding window via Redis
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),

    // Event bus for domain events
    EventEmitterModule.forRoot(),

    // Cron jobs (payroll, ML retraining)
    ScheduleModule.forRoot(),

    // Feature modules
    AuthModule,
    UsersModule,
    TenantsModule,
    FinanceModule,
    HrModule,
    SupplyChainModule,
    AiModule,
    DashboardModule,
    ProjectsModule,
    NotificationsModule,
    AuditModule,
  ],
})
export class AppModule {}
