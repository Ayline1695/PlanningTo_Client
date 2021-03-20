import React from "react";
import { useAuth } from "../../../context/AuthContext.utils";

function Profile() {
  const { user, setUser } = useAuth();
  React.useEffect(() => {
    setUser();
  }, []);

  return (
    <div>
      <h3>Profile</h3>
    </div>
  );
}

export default Profile;
