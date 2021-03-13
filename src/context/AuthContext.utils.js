import React from "react";
import { AuthContext } from "./AuthContext";

//helper: llamar a useContext para consumir un context en un componente como argumento
export function useAuth() {
  return React.useContext(AuthContext);
}

// componente tipo clase = NO hooks
export function withAuth(Component) {
  return (props) => {
    const state = useAuth();
    return <Component {...props} {...state} />;
  };
}
