import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";
import Home from "../../views/Home/Home";

//ruta privada
function PrivateRoute({ path, exact, children }) {
  // solo muestra el contenido si hay un usuario privado
  // redirige
  const { user } = useAuth();
  if (!user.isLogged) {
    return <Redirect to={<Home />} />;
  }
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

// si no estoy loggeado, solo puedo ver lo que le muestre

export default PrivateRoute;
