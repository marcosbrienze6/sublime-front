import React, { useEffect, useState } from "react";

const useFetchData = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`http://localhost:3000/${""}`);

        const result = response.json();
        setData(result);
      } catch (error) {
        console.log(error.message);
        setError(error);
      }
      setLoading(false);
      getData();
    };

    return { data, loading, error };
  }, []);
};

export default useFetchData;
