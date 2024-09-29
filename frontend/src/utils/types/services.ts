import { AxiosResponse } from 'axios';

export type ServiceRequest<T> = (
  page: number,
  limit: number,
  id?: string
) => Promise<AxiosResponse<T>>;

export type PaginationServiceResponse<T> = {
  page: number;
  count: number;
  total: number;
  records: T[];
};
