import React from "react";
import List from "./views/Lists/List";
import { Switch, Route, Link } from "react-router-dom";
import AnonRoute from "./components/User/AnonRoute";
import PrivateRoute from "./components/User/PrivateRoute";
import Signup from "./views/Auth/Signup";
import Login from "./views/Auth/Login";
import Logout from "./views/Auth/Logout";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/">
          <nav>
            <Logout />
          </nav>
          <h2>Redireccion despues de registrarse/logearse</h2>
          <h3>Listas</h3>
          <List />
        </PrivateRoute>
        <AnonRoute exact path="/signup">
          <Signup />
        </AnonRoute>
        <AnonRoute exact path="/login">
          <Login />
        </AnonRoute>
      </Switch>
    </div>
  );
}

export default App;
