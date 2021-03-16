import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AnonRoute from "./components/User/AnonRoute";
import PrivateRoute from "./components/User/PrivateRoute";
import Signup from "./views/Auth/Signup";
import Login from "./views/Auth/Login";
//import Logout from "./views/Auth/Logout";
import Home from "./views/Private/Home/Home";
import Navbar from "./views/Private/Navbar/Navbar";
//prueba
import Project from "./views/Private/Projects/Project.js";
import List from "./views/Private/Lists/List";
import Task from "./views/Private/Task/Task";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
      </Switch>
    </div>
  );
}

//<AnonRoute exact path="/signup">
//          <Signup />
//        </AnonRoute>
//        <AnonRoute exact path="/login">
//          <Login />
//        </AnonRoute>
//        <PrivateRoute exact path="/">
//          <Navbar />
//          <Home />
//        </PrivateRoute>

export default App;
