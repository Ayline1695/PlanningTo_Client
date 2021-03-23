import React, { Component } from "react";
import { useState } from "react";
import "./SearchBar.css";

function Searchbar({ query, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        name="query"
        placeholder=" search..."
        value={query}
        onChange={onChange}
      />
    </div>
  );
}
export default Searchbar;
