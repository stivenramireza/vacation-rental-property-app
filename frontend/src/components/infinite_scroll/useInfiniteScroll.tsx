import { useCallback, useEffect, useState } from 'react';

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

  const fetchMoreData = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await requestService(page, pageLimit, id);
      const newData = response.data.records;

      setData((prevData) => [...prevData, ...newData]);
      setHasMore(newData.length === pageLimit);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, pageLimit, requestService, id]);

  useEffect(() => {
    fetchMoreData();
  }, [fetchMoreData]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMore && !loading) {
      fetchMoreData();
    }
  }, [hasMore, loading, fetchMoreData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    data,
    loading
  };
};

export default useInfiniteScroll;
