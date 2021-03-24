import React from "react";
import { AuthContext } from "./AuthContext";

//helper: llamar a useContext para consumir un context en un componente como argumento
export function useAuth() {
  return React.useContext(AuthContext);
}

export function defaultUser() {
  return {
    id: null,
    email: "",
    username: "",
    isLogged: false,
  };
}

export function getLocalUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : defaultUser();
}

export function saveUser(user) {
  const strgyfiedUser = JSON.stringify({ ...user, isLogged: true });
  localStorage.setItem("user", strgyfiedUser);
}

export function removeUser() {
  localStorage.removeItem("user");
}

// componente tipo clase = NO hooks
export function withAuth(Component) {
  return (props) => {
    const state = useAuth();
    return <Component {...props} {...state} />;
  };
}
