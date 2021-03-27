import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";

function AnonRoute({ path, exact, children }) {
  const { user } = useAuth();

  if (user?.isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <Route exact path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default AnonRoute;
