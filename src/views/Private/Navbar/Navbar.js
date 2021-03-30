import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./Navbar.css";
import Logout from "../../Auth/Logout";
import { useAuth } from "../../../context/AuthContext.utils";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="nav-style">
      <div className="homelink">
        <Link to="/">
          <img alt="Home" src="./home.png" />
        </Link>
      </div>
      <div className="nav-title">
        <h3>Bienvenid@, {user.username}</h3>
      </div>
      <ul className="nav-desplegable">
        <li>
          <img
            alt="user"
            src={user.imageUrl}
            style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          />
          <ul className="desplegable">
            <li>
              <Link to="/profile">Perfíl</Link>
            </li>
            <li className="logout">
              <Logout />
            </li>
          </ul>
        </li>
      </ul>
      <div className="nav-desplegable-mas">
        <div className="user-intro">
          <Link to="/profile">
            <img
              alt="user"
              src={user.imageUrl}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                display: "block",
              }}
            />
            <p>Perfíl</p>
          </Link>
        </div>
        <div className="logout">
          <Logout />
        </div>
      </div>
    </nav>
  );
}

//<div className="logout">
//        <Logout />
//      </div>

export default Navbar;
