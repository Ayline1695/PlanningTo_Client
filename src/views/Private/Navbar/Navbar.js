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
      <div
        style={{
          background: `url(${user.imageUrl})no-repeat center`,
          textAlign: "center",
        }}
      >
        <Link to="/profile">
          <img
            className="userImage"
            alt="profile img"
            src={user.imageUrl}
            style={{ width: "100px", borderRadius: "100%" }}
          />
        </Link>
        <h3>
          Bienvenid@, <span>{user.username}</span>
        </h3>
      </div>
      <Link className="homelink" to="/">
        <img
          alt="Home"
          src="https://lh3.googleusercontent.com/proxy/EgJZTcaT-l2jM3JMCeWLG9bMuhIN1HGjJ3KTHpSwR6AhEpjQLGLh8QXSrZFkLBaeqwViQ9AXXl8GZfUE6VE0ZF8oyjx63WucvYONgbt8Z59IY-wDO3FAdAWkkJxkeUK1Rrs"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
