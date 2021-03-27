import React from "react";

import { login, logout, signup } from "../services/auth.service";
import {
  getLocalUser,
  saveUser,
  removeUser,
  defaultUser,
} from "./AuthContext.utils";
//crear un contexto

export const AuthContext = React.createContext({});

const initialState = {
  //isLogged: localStorage.getItem("isLogged"),
  user: getLocalUser(),
};

// va a devolver la logica del estado que se quiere compartir
function AuthProvider({ children }) {
  // info del usuario
  const [user, setUser] = React.useState(initialState);

  //prueba

  const handleLogin = React.useCallback(
    async (user) => {
      try {
        const { data: loggedUser } = await login(user);
        saveUser(loggedUser);
        setUser({ user: { ...loggedUser, isLogged: true } });
      } catch (e) {
        console.error(e);
      }
    },
    [login, setUser, saveUser]
  );

  const handleSignup = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await signup(user);
      saveUser(loggedUser);
      console.log("LOGGEDUSER ->", loggedUser);
      setUser({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLogout = React.useCallback(async () => {
    try {
      await logout();
      localStorage.removeItem("user");
      setUser({
        user: {
          id: null,
          email: "",
          isLogged: false,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user.user,
        setUser,
        handleLogin,
        handleSignup,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
