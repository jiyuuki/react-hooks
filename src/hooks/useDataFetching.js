import { useState, useEffect } from "react";

function useDataFetching(dataSource) {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [data, setData] = useState([])


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const result = await data.json();
        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (e) {
        setLoading(true)
        setError(e.message)
      }
    }
    fetchData();
  }, [dataSource]);

  return [loading, error, data]
}

export default useDataFetching
