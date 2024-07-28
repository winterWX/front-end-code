import { useState, useEffect } from "react";

export const useRequest = (fn, dependencies, defaultValue = []) => {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = () => {
    let cancel = false;
    setLoading(true);
    fn()
      .then(res => {
        if (!cancel) {
          setData(res);
        } else {
          const { tab } = res;
          console.log(`request with ${tab} canceled`);
        }
      })
      .catch(() => {
        if (!cancel) {
          setError(error);
        }
      })
      .finally(() => {
        if (!cancel) {
          setLoading(false);
        }
      });

    return () => {
      cancel = true;
    };
  };

  useEffect(() => {
    const cancelRequest = request();
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line
  }, dependencies);

  return { data, setData, loading, error, request };
};

export function useWithLoading(fn) {
  const [loading, setLoading] = useState(false);

  const func = (...args) => {
    setLoading(true);
    return fn(...args).finally(() => {
      setLoading(false);
    });
  };

  return { func, loading };
}
