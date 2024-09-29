import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GeneralService } from '../services/general.service';

@ApiTags('General')
@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Get('health-check')
  getHealthCheckStatus() {
    return this.generalService.getHealthCheckStatus();
  }
}
