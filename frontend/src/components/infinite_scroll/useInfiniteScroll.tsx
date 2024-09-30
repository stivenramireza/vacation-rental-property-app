import { useEffect, useRef, useState } from 'react';

import { PaginationServiceResponse, ServiceRequest } from '../../utils/types/services';

const useInfiniteScroll = <T,>(params: {
  requestService: ServiceRequest<PaginationServiceResponse<T>>;
  pageLimit: number;
  id?: string;
}): { data: T[]; loading: boolean; hasMore: boolean } => {
  const { requestService, pageLimit, id } = params || {};

  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const initialFetchDone = useRef(false);

  useEffect(() => {
    if (initialFetchDone.current) return;

    fetchMoreData();
    initialFetchDone.current = true;
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
      const { total, records } = response.data;

      setData((prevData) => [...prevData, ...records]);
      setHasMore(data.length !== total);
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
    loading,
    hasMore
  };
};

export default useInfiniteScroll;
