import React, { Component } from "react";
import { useState } from "react";

function Searchbar({ query, onChange }) {
  return (
    <div>
      <input
        type="text"
        name="query"
        placeholder="search..."
        value={query}
        onChange={onChange}
      />
    </div>
  );
}
export default Searchbar;
