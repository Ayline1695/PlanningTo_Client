import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Logout from "../../Auth/Logout";
import Projects from "../Projects/Project";
import Home from "../../Home/Home";

function Navbar() {
  return (
    <nav className="nav-style">
      <ul>
        <li>Welcome, NOMBRE USUARIO</li>
        <li>
          <Link to="/home" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
          <Link to="/list" style={{ textDecoration: "none" }}>
            Lists
          </Link>
          <Link to="/task" style={{ textDecoration: "none" }}>
            Task
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
