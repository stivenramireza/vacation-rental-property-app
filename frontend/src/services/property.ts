import { AxiosResponse } from 'axios';

import { Request } from './api';
import { Property } from '../utils/types/components';

export const createProperty = async (property: Property): Promise<AxiosResponse> => {
  return await Request.post('/properties', property);
};

export const getProperties = async (page: number, limit: number): Promise<AxiosResponse> => {
  return await Request.get('/properties', { params: { page, limit } });
};
