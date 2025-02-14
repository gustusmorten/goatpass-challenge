import { convertKeysToCamelCase } from '@/utils/format/format';
import { useCallback, useEffect, useState } from 'react';

type ApiResponse<T, P extends any[]> = {
	data: T | null;
	error: Error | null;
	loading: boolean;
	refetch: (...params: P ) => Promise<void>;
};

/**
 * Custom hook to handle API calls
 * @param apiCall - The API call to be made
 * @param initialParams - The initial parameters to be passed to the API call
 * @returns The API response
 * @example
 * const initialParams = ['param1', 'param2'];
 * const { data, error, loading, refetch } = useApi(apiCall, initialParams);
 * refetch(newParams);
 * if (loading) return <Loading />;
 * if (error) return <Error />;
 * return <Data data={data} />;
 */

const useApi = <T, P extends any[]>(
	apiCall: (...params: P) => Promise<T>,
	initialParams?: P,
): ApiResponse<T, P> => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const execute = useCallback(
		async (...params: P) => {
			setLoading(true);
			setError(null);

			try {
				const result = await apiCall(...(params.length > 0 ? params : initialParams ?? ([] as unknown as P)));
				const camelCaseData = convertKeysToCamelCase<T>(result);
				setData(camelCaseData);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		},
		[apiCall],
	);

	useEffect(() => {
		if (initialParams) {
			execute(...initialParams);
		} else {
			execute(...([] as unknown as P));
		}
	}, []);

	return { data, error, loading, refetch: execute };
};

export default useApi;
