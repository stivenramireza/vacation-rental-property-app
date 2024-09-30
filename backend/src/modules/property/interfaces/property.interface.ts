export enum PropertyStatus {
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED'
}

export interface PropertyFindParams {
  name: string;
  location: string;
}
