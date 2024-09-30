import { AxiosResponse } from 'axios';

import { Request } from './api';
import { BookingForm } from '../utils/types/components';

export const getBookings = async (
  page: number,
  limit: number,
  id?: string
): Promise<AxiosResponse> => {
  return await Request.get(`/properties/${id}/bookings`, { params: { page, limit } });
};

export const createBooking = async (
  propertyId: string,
  booking: BookingForm
): Promise<AxiosResponse> => {
  return await Request.post(`/properties/${propertyId}/book`, booking);
};
