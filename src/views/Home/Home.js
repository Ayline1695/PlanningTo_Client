import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>HOME</h1>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
// onClick event para desplegar formulario en la pagina?
export default Home;
