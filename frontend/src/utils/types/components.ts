export type Property = {
  id?: string;
  name: string;
  location: string;
  pricePerNight: number;
  availabilityStart: string;
  availabilityEnd: string;
};

export type Alert = {
  type: 'success' | 'danger';
  message: string;
};

export type RenderItem<T> = (props: { item: T }) => JSX.Element;
