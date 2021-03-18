import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AnonRoute from "./components/User/AnonRoute";
import PrivateRoute from "./components/User/PrivateRoute";
import Signup from "./views/Auth/Signup";
import Login from "./views/Auth/Login";
import Home from "./views/Private/Home/Home";
//import HomeInicial from "./views/Home/Home";
import NewProject from "./components/Projects/NewProject";
import List from "./views/Private/Lists/List";
import Task from "./views/Private/Task/Task";
import Navbar from "./views/Private/Navbar/Navbar";
import ProjectDetail from "./components/Projects/ProjectDetail";

function App() {
  return (
    <div>
      <AnonRoute exact path="/login">
        <Login />
      </AnonRoute>
      <AnonRoute exact path="/signup">
        <Signup />
      </AnonRoute>
      <Switch>
        <PrivateRoute exact path="/">
          <Navbar />
          <Home />
        </PrivateRoute>
        <PrivateRoute exact path="/project">
          <Navbar />
          <NewProject />
        </PrivateRoute>
        <PrivateRoute exact path="/project/:projectId">
          <Navbar />
          <ProjectDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/list">
          <Navbar />
          <List />
        </PrivateRoute>
        <PrivateRoute exact path="/task">
          <Navbar />
          <Task />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
