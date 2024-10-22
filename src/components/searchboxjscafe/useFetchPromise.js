import { useEffect, useState } from "react";

const useFetchPromise = (query, transFormData) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  async function fetchList(query, transFormData) {
    try {
      const resp = await fetch(`https://swapi.dev/api/people/?search=${query}`);
      if (!resp.ok) throw new Error(resp.statusText);
      const data = await resp.json();
      console.log(transFormData(data));
      setData(transFormData(data));
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  useEffect(() => {
    if (!query) {
      setData(null);
      setError(null);
      return;
    }
    fetchList(query, transFormData);
  }, [query, transFormData]);

  return [data, error, setData];
};

export default useFetchPromise;
