import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AnonRoute from "./components/User/AnonRoute";
import PrivateRoute from "./components/User/PrivateRoute";
import Signup from "./views/Auth/Signup";
import Login from "./views/Auth/Login";
import Home from "./views/Private/Home/Home";
//import HomeInicial from "./views/Home/Home";
import NewProject from "./components/Projects/NewProject";
import NewPostIt from "./components/List/NewPostIt";
import List from "./views/Private/Lists/List";
import Task from "./views/Private/Task/Task";
import TaskDetail from "./components/Task/TaskDetail";
import Navbar from "./views/Private/Navbar/Navbar";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Project from "./views/Private/Projects/Project";
import Profile from "./views/Private/User/Profile";
import Footer from "./views/Private/Footer/Footer";
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
          <Footer />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Navbar />
          <Profile />
          <Footer />
        </PrivateRoute>
        <PrivateRoute exact path="/project">
          <Navbar />
          <Project />
          <NewProject />
          <Footer />
        </PrivateRoute>
        <PrivateRoute exact path="/project/:projectId">
          <Navbar />
          <ProjectDetail />
          <Footer />
        </PrivateRoute>
        <PrivateRoute exact path="/project/:projectId/tasks/:taskId">
          <Navbar />
          <TaskDetail />
          <Footer />
        </PrivateRoute>
        <PrivateRoute exact path="/list">
          <Navbar />
          <List />
          <NewPostIt />
          <Footer />
        </PrivateRoute>
        <PrivateRoute exact path="/task">
          <Navbar />
          <Task />
          <Footer />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
