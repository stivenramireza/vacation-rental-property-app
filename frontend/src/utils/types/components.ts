export type Property = {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  availabilityStart: string;
  availabilityEnd: string;
};

export type PropertyForm = Omit<Property, 'id'>;

export type Booking = {
  id: string;
  propertyId: string;
  customerName: string;
  checkIn: string;
  checkOut: string;
};

export type BookingForm = Omit<Booking, 'id' | 'propertyId'>;

export type Alert = {
  type: 'success' | 'danger';
  message: string;
};

export type RenderItem<T> = (props: { item: T }) => JSX.Element;
