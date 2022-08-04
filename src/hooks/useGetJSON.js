import { useEffect, useState } from 'react';
import { unRestrictedRoutes } from '../lib/axios-config';

function useGetJSON(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getJSON() {
      try {
        setLoading(true);
        const { data } = await unRestrictedRoutes.get(url);
        setData(data?.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getJSON();
  }, [url]);

  async function reFetch() {
    try {
      setLoading(true);
      const { data } = await unRestrictedRoutes.get(url);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, reFetch };
}

export default useGetJSON;
