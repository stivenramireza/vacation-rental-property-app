import { Card } from 'react-bootstrap';

import { formatDate } from '../../../utils/functions';
import { Booking } from '../../../utils/types/components';
import { DATE_FORMAT } from '../../../utils/constants/dates';

type BookingCardProps = {
  booking: Booking;
};

const BookingCard = ({ booking }: BookingCardProps) => {
  return (
    <Card className="d-flex" style={{ maxWidth: '500px' }}>
      <Card.Body>
        <Card.Title>{booking.customerName}</Card.Title>
        <Card.Text>
          <strong>Checkin date:</strong> {formatDate(booking.checkIn, DATE_FORMAT)}
        </Card.Text>
        <Card.Text>
          <strong>Checkout date:</strong> {formatDate(booking.checkIn, DATE_FORMAT)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookingCard;
