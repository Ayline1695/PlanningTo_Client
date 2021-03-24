import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";

//ruta anonima
function AnonRoute({ path, exact, children }) {
  // recupera la info del contexto
  const { user } = useAuth();
  console.log("ANON USER: ", user);
  if (user.isLogged) {
    return <Redirect to="/" />; // private home
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

// si no estoy loggeado, solo puedo ver lo que le muestre

export default AnonRoute;
