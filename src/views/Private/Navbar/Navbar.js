import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Navbar.css";
import Logout from "../../Auth/Logout";
import { useAuth } from "../../../context/AuthContext.utils";

function Navbar() {
  const { user } = useAuth();
  // <img
  //   alt="profile img"
  //   src={user.user.imageUrl}
  //   style={{ width: "100px", borderRadius: "100%" }}
  // />
  // <h4>Welcome, {user.user.username}</h4>
  return (
    <nav className="nav-style">
      <div className="links">
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Logout />
      </div>
      <Link to="/profile">Perfíl imagen</Link>
      <h4>Welcome, {user?.user?.username}</h4>
    </nav>
  );
}

export default Navbar;
