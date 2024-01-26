import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API Call error: ${response.status}`);
        }
        return response.json();
      })

      .then((fetchedData) => {
        if (!fetchedData) {
          throw new Error("Empty API call");
        }

        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error during API call:", error);
        setError("Error during API call");
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
