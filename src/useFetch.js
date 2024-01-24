import { useState, useEffect, useRef } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use a ref to store cached data
  const cachedData = useRef(null);

  useEffect(() => {
    // Check for cached data first
    const cachedDataString = localStorage.getItem(url);

    if (cachedDataString) {
      const cachedDataParsed = JSON.parse(cachedDataString);
      setData(cachedDataParsed);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((fetchedData) => {
        // Store the fetched data in cache
        cachedData.current = fetchedData;
        setData(fetchedData);
        localStorage.setItem(url, JSON.stringify(fetchedData));
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);


  const isDataInCache = () => {
    return !!cachedData.current; // Returns true if there is data in cache, false otherwise
  };


  return { data, loading, error, isDataInCache };
}

export default useFetch;
