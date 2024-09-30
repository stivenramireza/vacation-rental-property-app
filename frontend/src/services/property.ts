import { AxiosResponse } from 'axios';

import { Request } from './api';
import { PropertyForm } from '../utils/types/components';

export const createProperty = async (property: PropertyForm): Promise<AxiosResponse> => {
  return await Request.post('/properties', property);
};

export const getProperties = async (page: number, limit: number): Promise<AxiosResponse> => {
  return await Request.get('/properties', { params: { page, limit } });
};

export const getProperty = async (propertyId: string): Promise<AxiosResponse> => {
  return await Request.get(`/properties/${propertyId}`);
};

export const deleteProperty = async (propertyId: string): Promise<AxiosResponse> => {
  return await Request.delete(`/properties/${propertyId}`);
};
