// @src/hooks/useFetch.js

import { useState, useEffect } from "react";

import got from "./got";

const useFetch = () => {
  const [data, setData] = useState({
    surname: "",
    results: [],
  });

  useEffect(() => {
    if (data.surname !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await got.get(`/${data.surname}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.surname]);

  return { data, setData };
};

export default useFetch;
