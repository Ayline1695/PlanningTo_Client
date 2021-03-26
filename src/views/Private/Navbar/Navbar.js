import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Navbar.css";
import Logout from "../../Auth/Logout";
import { useAuth } from "../../../context/AuthContext.utils";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="nav-style">
      <div className="logout">
        <Logout />
      </div>
      <Link to="/profile">
        <img
          alt="profile img"
          src={user.imageUrl}
          style={{ width: "100px", borderRadius: "100%" }}
        />
      </Link>
      <h3>
        Welcome, <span>{user.username}</span>
      </h3>
      <Link className="homelink" to="/">
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
