import { Row, Col, Spinner } from 'react-bootstrap';

import { RenderItem } from '../../utils/types/components';
import { PaginationServiceResponse, ServiceRequest } from '../../utils/types/services';
import useInfiniteScroll from './useInfiniteScroll';

type InfiniteScrollProps<T> = {
  renderItem: RenderItem<T>;
  requestService: ServiceRequest<PaginationServiceResponse<T>>;
  pageLimit: number;
  id?: string;
};

const InfiniteScroll = <T,>({
  renderItem,
  requestService,
  pageLimit,
  id
}: InfiniteScrollProps<T>) => {
  const { data, loading } = useInfiniteScroll<T>({
    requestService,
    pageLimit,
    id
  });

  return (
    <div className="container mt-4 mb-4">
      <Row xs={1} md={2} className="g-3">
        {data.map((item, index) => (
          <Col key={index}>{renderItem({ item })}</Col>
        ))}
      </Row>
      {loading && <Spinner animation="border" />}
    </div>
  );
};

export default InfiniteScroll;
