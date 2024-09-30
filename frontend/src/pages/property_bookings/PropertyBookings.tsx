import { useParams } from 'react-router-dom';

import BookingList from '../../components/booking/list/BookingList';

const PropertyBookings = () => {
  const { propertyId } = useParams<{ propertyId: string }>();

  return (
    <div className="container">
      <BookingList propertyId={propertyId} />
    </div>
  );
};

export default PropertyBookings;
