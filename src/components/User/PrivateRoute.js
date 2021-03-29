import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";
import Login from "../../views/Auth/Login";

function PrivateRoute({ path, exact, children }) {
  const { user } = useAuth();

  if (!user?.isLogged) {
    return <Login />;
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
