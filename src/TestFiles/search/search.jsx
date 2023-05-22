import React from "react";

import useFetch from "./usefetch";
import House from "./house";

export default function Search() {
  const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="text"
        placeholder="Search for Employees"
        value={data.slug}
        onChange={(e) =>
          setData({ ...data, slug: e.target.value.toLowerCase() })
        }
      />
      <br />
      {data.results.length > 0 ? <House family={data.results[0]} /> : null}
    </main>
  );
}
