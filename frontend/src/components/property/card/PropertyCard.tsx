import { Card, Button } from 'react-bootstrap';

import { Property } from '../../../utils/types/components';
import { formatDate } from '../../../utils/functions';
import usePropertyCard from './usePropertyCard';
import { DATE_FORMAT } from '../../../utils/constants/dates';

type PropertyCardProps = {
  property: Property;
  onDelete: (propertyId: string) => void;
};

const PropertyCard = ({ property, onDelete }: PropertyCardProps) => {
  const { handleViewBookings, handleAddBooking, handleDelete } = usePropertyCard({ onDelete });

  return (
    <Card className="d-flex" style={{ maxWidth: '500px' }}>
      <Card.Body>
        <Card.Title>{property.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{property.location}</Card.Subtitle>
        <Card.Text>Price per Night: ${property.pricePerNight}</Card.Text>
        <Card.Text>
          Availability start date: {formatDate(property.availabilityStart, DATE_FORMAT)}
        </Card.Text>
        <Card.Text>
          Availability end date: {formatDate(property.availabilityEnd, DATE_FORMAT)}
        </Card.Text>
        <Button variant="info" className="me-2" onClick={() => handleViewBookings(property.id)}>
          View Bookings
        </Button>
        <Button variant="success" className="me-2" onClick={() => handleAddBooking(property.id)}>
          Add Booking
        </Button>
        <Button variant="danger" onClick={() => handleDelete(property.id)}>
          Delete Property
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
