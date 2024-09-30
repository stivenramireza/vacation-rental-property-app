/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent, ChangeEvent, Dispatch, SetStateAction } from 'react';

import { createProperty } from '../../../services/property';
import { Alert, PropertyForm } from '../../../utils/types/components';

const usePropertyForm = (): {
  formData: PropertyForm;
  setFormData: Dispatch<SetStateAction<PropertyForm>>;
  alert: Alert | null;
  setAlert: Dispatch<SetStateAction<Alert | null>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
} => {
  const [formData, setFormData] = useState<PropertyForm>({
    name: '',
    location: '',
    pricePerNight: 100,
    availabilityStart: '',
    availabilityEnd: ''
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
      await createProperty(formData);

      setFormData({
        name: '',
        location: '',
        pricePerNight: 100,
        availabilityStart: '',
        availabilityEnd: ''
      });

      setAlert({ type: 'success', message: 'Property was created successfully' });
    } catch (error: any) {
      console.error(error);

      let message = 'Error to create the property. Try again!';
      if (error.response.status === 409) {
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

export default usePropertyForm;
