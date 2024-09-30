import { useNavigate } from 'react-router-dom';

const usePropertyCard = (props: {
  onDelete: (propertyId: string) => void;
}): {
  handleViewBookings: (propertyId: string) => void;
  handleAddBooking: (propertyId: string) => void;
  handleDelete: (propertyId: string) => void;
} => {
  const { onDelete } = props;
  const navigate = useNavigate();

  const handleViewBookings = (propertyId: string): void => {
    navigate(`/properties/${propertyId}/bookings`);
  };

  const handleAddBooking = (propertyId: string): void => {
    navigate(`/properties/${propertyId}/book`);
  };

  const handleDelete = (propertyId: string): void => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      onDelete(propertyId);
    }
  };

  return {
    handleViewBookings,
    handleAddBooking,
    handleDelete
  };
};

export default usePropertyCard;
