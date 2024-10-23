import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
const useFetchPromise = (query, transFormData, promise,debounceWait) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchList = useCallback(
    debounce(async (query, transFormData,signal) => {
      try {
        const resp = await promise(query,signal);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();
        console.log(transFormData(data));
        setData(transFormData(data));
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }, debounceWait),
    []
  );
  useEffect(() => {
    if (!query) {
      setData(null);
      setError(null);
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    fetchList(query, transFormData,signal);
    return ()=>{
      controller.abort();
    }
  }, [query, transFormData, fetchList]);

  return [data, error, setData];
};

export default useFetchPromise;
