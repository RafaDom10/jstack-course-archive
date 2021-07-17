import { useState, useEffect, useDebugValue } from 'react';

export function useFetch(url) {

  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse({json, status: resp.status});
    })();
  }, [url]);

  useDebugValue(response?.status, (message) => {
    return `Status: ${message}`;
  })

  const string = JSON.stringify(response?.json);

  return [loading, string];
}
