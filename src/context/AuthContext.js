import React from "react";

//crear un contexto

export const AuthContext = React.createContext({});

const initialState = {
  isLogged: localStorage.getItem("isLogged"),
};

// va a devolver la logica del estado que se quiere compartir
function AuthProvider({ children }) {
  // info del usuario
  const [user, setUser] = React.useState(initialState);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
