import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type ApiRequest<T> = (params: object, options?: RequestInit) => Promise<T>;

export const useFetchData = <T>(apiRequest: ApiRequest<T>, params: object, cb?: (result: T) => void): [boolean, (T | null)] => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);
    const [result, setResult] = React.useState<T | null>(null);

    React.useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            const result = await apiRequest(params, { signal: abortController.signal });

            // api может кидать неописанные фолбэки
            // @ts-ignore
            if (result?.detail === 'Not found') {
                navigate('/not-found');
            }

            if (cb) {
                cb(result);
            }

            setResult(result);
            setIsLoading(false);
        };

        try {
            setIsLoading(true);
            fetchData();
        } catch (e) {
            setIsLoading(false);
        }

        return () => {
            abortController.abort();
        }
    }, [params, cb, apiRequest, navigate]);

    return [isLoading, result];
};
