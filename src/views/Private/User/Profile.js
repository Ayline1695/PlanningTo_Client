import React from "react";
import { getUser } from "../../../services/auth.service";
import { useAuth } from "../../../context/AuthContext.utils";

function Profile() {
  const { user, setUser } = useAuth();
  //const getUserInfo = async () => {
  //  await getUser();
  //};
  console.log("USER: ", user);

  return (
    <div>
      <h3>Profile</h3>
      {user.user.username}
    </div>
  );
}

export default Profile;
