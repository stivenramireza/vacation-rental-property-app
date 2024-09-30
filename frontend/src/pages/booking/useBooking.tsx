import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property } from '../../utils/types/components';
import { getProperty } from '../../services/property';

const useBooking = (): { property: Property } => {
  const { propertyId } = useParams<{ propertyId: string }>();

  const [property, setProperty] = useState<Property>({} as Property);

  useEffect(() => {
    getPropertyInfo();
  });

  const getPropertyInfo = async () => {
    const { data } = await getProperty(propertyId as string);
    setProperty({
      id: data.id,
      name: data.name,
      location: data.location,
      pricePerNight: data.pricePerNight,
      availabilityStart: data.availabilityStart,
      availabilityEnd: data.availabilityEnd
    });
  };

  return {
    property
  };
};

export default useBooking;
