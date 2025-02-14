import { convertKeysToCamelCase } from '@/utils/format/format';
import { useCallback, useState } from 'react';

type ApiResponse<T, P extends any[]> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
  callApi: (...params: P) => Promise<void>; 
};

/**
 * Realuza una petición a una API
 * @param apiCall 
 * @param params 
 * @returns 
 * @example
 * const { data, error, loading, fetch } = useLazyApi(loginPost, data);
 * 
 */

const useLazyApi = <T, P extends any[]>(apiCall: (...params: P) => Promise<T>): ApiResponse<T, P> => {
  const [data, setData] = useState<T | null>(null); 
  const [error, setError] = useState<Error | null>(null); 
  const [loading, setLoading] = useState<boolean>(false); 

  const callApi = useCallback(async (...params: P) => {
    setLoading(true);
    setError(null); 

    try {
      const result = await apiCall(...params); 
      const camelCaseData = convertKeysToCamelCase<T>(result);         
      setData(camelCaseData); 
    } catch (err) {
      setError(err as Error); 
    } finally {
      setLoading(false); 
    }
  }, [apiCall]);



  return { data, error, loading, callApi };
};

export default useLazyApi;