import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";

function Logout() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { handleLogout } = useAuth();
  const history = useHistory();
  const logout = async () => {
    setIsLoading(true);
    await handleLogout();
    setIsLoading(false);
    history.push("/");
  };
  if (isLoading) {
    return (
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return <button onClick={logout}>Logout</button>;
}

export default Logout;
