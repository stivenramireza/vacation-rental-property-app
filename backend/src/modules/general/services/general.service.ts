import { Injectable } from '@nestjs/common';

import {
  HealthCheckStatus,
  HealthCheckStatusResponse
} from '../interfaces/general.interface';

@Injectable()
export class GeneralService {
  getHealthCheckStatus(): HealthCheckStatusResponse {
    return { status: HealthCheckStatus.OK };
  }
}
