export enum HealthCheckStatus {
  OK = 'OK',
  ERROR = 'ERROR'
}

export interface HealthCheckStatusResponse {
  status: HealthCheckStatus;
}
