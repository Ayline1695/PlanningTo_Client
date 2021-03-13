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
    localStorage.removeItem("user");
  };
  const handleSubmit = async (d) => {
    try {
      await logout();
      removeUser();
      setUser({ user: defaultUser() });
    } catch (e) {
      console.error(e);
    }
  };
  return <button onClick={handleSubmit}>Logout</button>;
}

export default Logout;
