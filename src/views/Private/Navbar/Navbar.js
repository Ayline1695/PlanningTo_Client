import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Navbar.css";
import Logout from "../../Auth/Logout";
import { useAuth } from "../../../context/AuthContext.utils";

function Navbar() {
  const { user } = useAuth();
  //<img
  //  alt="profile img"
  //  src={user.user.imageUrl}
  //  style={{ width: "100px", borderRadius: "100%" }}
  ///>
  //<h4>Welcome, {user.user.username}</h4>
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
      <div className="add">
        <ul>
          <li>
            <Link to="/project">+ Plan</Link>
          </li>
          <li>
            <Link to="/list">+ Note</Link>
          </li>
          <li>
            <Link to="/task">+ Task</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
