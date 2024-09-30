/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Alert, BookingForm } from '../../../utils/types/components';
import { createBooking } from '../../../services/booking';

const useBookingForm = (
  propertyId: string
): {
  formData: BookingForm;
  setFormData: Dispatch<SetStateAction<BookingForm>>;
  alert: Alert | null;
  setAlert: Dispatch<SetStateAction<Alert | null>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
} => {
  const [formData, setFormData] = useState<BookingForm>({
    customerName: '',
    checkIn: '',
    checkOut: ''
  });

  const [alert, setAlert] = useState<Alert | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      await createBooking(propertyId, formData);

      setFormData({
        customerName: '',
        checkIn: '',
        checkOut: ''
      });

      setAlert({ type: 'success', message: 'Booking was created successfully' });
    } catch (error: any) {
      console.error(error);

      let message = 'Error to create the booking. Try again!';
      if (error.response.status < 500) {
        message = error.response.data.message;
      }

      setAlert({ type: 'danger', message });
    }
  };

  return {
    formData,
    setFormData,
    alert,
    setAlert,
    handleChange,
    handleSubmit
  };
};

export default useBookingForm;
