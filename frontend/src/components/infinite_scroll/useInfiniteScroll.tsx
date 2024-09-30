import { useEffect, useState } from 'react';

import { PaginationServiceResponse, ServiceRequest } from '../../utils/types/services';

const useInfiniteScroll = <T,>(params: {
  requestService: ServiceRequest<PaginationServiceResponse<T>>;
  pageLimit: number;
  id?: string;
}): { data: T[]; loading: boolean } => {
  const { requestService, pageLimit, id } = params || {};

  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const fetchMoreData = async (): Promise<void> => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await requestService(page, pageLimit, id);
      const totalData = response.data.total;
      const newData = response.data.records;

      setData((prevData) => [...prevData, ...newData]);
      setHasMore(newData.length === totalData);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (): void => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
      hasMore &&
      !loading
    ) {
      fetchMoreData();
    }
  };

  return {
    data,
    loading
  };
};

export default useInfiniteScroll;
