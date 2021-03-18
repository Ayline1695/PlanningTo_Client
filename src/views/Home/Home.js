import React from "react";
import "./Home.css";
import { Link, Route, Switch } from "react-router-dom";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

function Home() {
  return (
    <div className="home">
      <div>
        <div align="center">Planning To</div>
        <Login />
      </div>
    </div>
  );
}
// onClick event para desplegar formulario en la pagina?
export default Home;
