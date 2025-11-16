import { useEffect, useState } from "react";

interface useFetchProps {
  call: () => Promise<any>;
}

interface useFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

export default function useFetch<T>({
  call,
}: useFetchProps): useFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    call()
      .then((response: T) => {
        console.log({ response });
        if (isMounted) {
          setData(response);
          setLoading(false);
        }
      })
      .catch((err: any) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [call]);

  return { data, loading, error };
}
