import { Card } from 'react-bootstrap';

import { Property } from '../../../utils/types/components';
import { formatDate } from '../../../utils/functions';

type PropertyCardProps = {
  property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="d-flex" style={{ maxWidth: '500px' }}>
      <Card.Body>
        <Card.Title>{property.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{property.location}</Card.Subtitle>
        <Card.Text>Price per Night: ${property.pricePerNight}</Card.Text>
        <Card.Text>
          Availability start date: {formatDate(property.availabilityStart, 'dd-MM-yyyy HH:mm')}
        </Card.Text>
        <Card.Text>
          Availability end date: {formatDate(property.availabilityEnd, 'dd-MM-yyyy HH:mm')}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
