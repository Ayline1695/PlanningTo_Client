import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";

function Logout() {
  const { user, handleLogout } = useAuth();
  const history = useHistory();
  const logout = async () => {
    await handleLogout();
    history.push("/");
  };

  return <button onClick={logout}>Logout</button>;
}

export default Logout;
