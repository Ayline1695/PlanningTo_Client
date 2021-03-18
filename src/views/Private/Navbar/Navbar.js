import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Navbar.css";
import Logout from "../../Auth/Logout";
import Projects from "../Projects/Project";
import Home from "../../Home/Home";

const linkStyle = {
  textDecoration: "none",
  border: "1px solid #000",
};
function Navbar() {
  return (
    <nav className="nav-style">
      <p>Imagen usuario</p>
      <h4>Welcome, NOMBRE USUARIO</h4>
      <Link to="/profile">Perfíl</Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <ul>
        <li>
          <Link to="/project" style={linkStyle}>
            New Project
          </Link>
        </li>
        <li>
          <Link to="/list" style={linkStyle}>
            New Note
          </Link>
        </li>
        <li>
          <Link to="/task" style={linkStyle}>
            New Task
          </Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
