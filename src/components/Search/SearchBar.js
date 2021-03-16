import React, { Component } from "react";
import { useState } from "react";

function Searchbar({ search }) {
  const [query, setQuery] = useState("");
  const handleChange = ({ target }) => {
    search(target.value);
    setQuery(target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
export default Searchbar;
