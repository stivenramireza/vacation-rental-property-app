import { Controller, Get } from '@nestjs/common';

import { GeneralService } from '../services/general.service';

@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('health-check')
  getHealthCheckStatus() {
    return this.generalService.getHealthCheckStatus();
  }
}
