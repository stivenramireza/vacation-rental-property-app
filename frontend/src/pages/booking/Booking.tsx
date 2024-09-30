import { Alert } from 'react-bootstrap';

import BookingForm from '../../components/booking/form/BookingForm';
import useBooking from './useBooking';
import { formatDate } from '../../utils/functions';
import { DATE_FORMAT } from '../../utils/constants/dates';

const Booking = (): JSX.Element => {
  const { property } = useBooking();

  return (
    <div className="container mt-4">
      <Alert variant="warning">
        <Alert.Heading>Remember!</Alert.Heading>
        <p>
          <strong>Availability start date:</strong>{' '}
          {formatDate(property.availabilityStart, DATE_FORMAT)}
        </p>
        <p>
          <strong>Availability end date:</strong>{' '}
          {formatDate(property.availabilityEnd, DATE_FORMAT)}
        </p>
      </Alert>
      <BookingForm propertyId={property.id} />
    </div>
  );
};

export default Booking;
