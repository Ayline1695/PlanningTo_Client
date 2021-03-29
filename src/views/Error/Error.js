import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="containerError">
      <div align="center" className="error">
        <h1>Oops.... </h1>
        <h1>Error 404</h1>
        <p>Page not found</p>
        <div>
          Back to <Link to="/">Home page</Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
