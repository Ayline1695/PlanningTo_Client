import React from "react";
import { useAuth } from "../../../context/AuthContext.utils";

function Profile() {
  const { user } = useAuth();
  console.log("USER: ", user);

  return (
    <div>
      <img
        alt="profile img"
        src={user.user.imageUrl}
        style={{ width: "100px", borderRadius: "100%" }}
      />
      <h3>Profile</h3>
      {user.user.username}
      <div>Lista nombres de proyectos y delete</div>
    </div>
  );
}

export default Profile;
