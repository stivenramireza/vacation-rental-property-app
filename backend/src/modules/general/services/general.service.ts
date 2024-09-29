import { Injectable } from '@nestjs/common';

import { HealthCheckStatus } from '../interfaces/general.interface';

@Injectable()
export class GeneralService {
  getHealthCheckStatus(): { status: HealthCheckStatus } {
    return { status: HealthCheckStatus.OK };
  }
}
