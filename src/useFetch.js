import { useState, useEffect, useRef } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use a ref to store cached data
  const cachedData = useRef(null);

  useEffect(() => {
    // Check for cached data first
    if (cachedData.current) {
      setData(cachedData.current);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Store the fetched data in cache
        cachedData.current = data;
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
