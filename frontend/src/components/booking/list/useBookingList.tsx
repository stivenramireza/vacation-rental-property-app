import { Booking, RenderItem } from '../../../utils/types/components';
import BookingCard from '../card/BookingCard';

const useBookingList = (): {
  renderBooking: RenderItem<Booking>;
} => {
  const renderBooking: RenderItem<Booking> = ({ item }): JSX.Element => {
    return <BookingCard key={item.id} booking={item} />;
  };

  return {
    renderBooking
  };
};

export default useBookingList;
