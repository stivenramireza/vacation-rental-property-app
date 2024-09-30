import InfiniteScroll from '../../infinite_scroll/InfiniteScroll';
import { Booking } from '../../../utils/types/components';

import useBookingList from './useBookingList';
import { getBookings } from '../../../services/booking';

type BookingListProps = {
  propertyId?: string;
};

const BookingList = ({ propertyId }: BookingListProps): JSX.Element => {
  const { renderBooking } = useBookingList();

  return (
    <>
      <InfiniteScroll<Booking>
        renderItem={renderBooking}
        requestService={getBookings}
        pageLimit={4}
        id={propertyId}
      />
    </>
  );
};

export default BookingList;
