import { useState, useEffect } from 'react';

type UseApiResult<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

export function dynamicUseFetch<T = any>(apiMethod: () => Promise<any>, deps: any[] = []): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiMethod();
        setData(response);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, deps);

  return { data, error, loading };
}
