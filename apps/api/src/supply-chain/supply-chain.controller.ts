import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SupplyChainService } from './supply-chain.service';

@ApiTags('supply-chain')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('supply-chain')
export class SupplyChainController {
  constructor(private readonly service: SupplyChainService) {}

  @Get('health')
  health() { return { module: 'supply-chain', status: 'ok' }; }
}
