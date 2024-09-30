import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { GeneralService } from '../services/general.service';
import { HealthCheckStatusResponse } from '../interfaces/general.interface';

@ApiTags('General')
@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @ApiOperation({ summary: 'Get the health check status' })
  @Get('health-check')
  getHealthCheckStatus(): HealthCheckStatusResponse {
    return this.generalService.getHealthCheckStatus();
  }
}
