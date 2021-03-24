import React from "react";
import { logout } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";

function Logout() {
  const { setUser } = useAuth();
  //const [redirect, setRedirect] = React.useState(false);
  const defaultUser = () => {
    return {
      id: null,
      email: "",
      isLogged: false,
    };
  };
  const removeUser = () => {
    localStorage.removeItem("isLogged");
  };
  const handleSubmit = async (d) => {
    try {
      await logout(d);
      removeUser();
      setUser({ isLogged: false });
    } catch (e) {
      console.error(e);
    }
  };
  return <button onClick={handleSubmit}>Logout</button>;
}

// no va realmente, sale el usuario pero se vuelve a conectar, o falla esto o las rutas privadas

export default Logout;
