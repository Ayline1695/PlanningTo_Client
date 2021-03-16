import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import { signup } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";

function Signup() {
  const { setUser } = useAuth();

  const handleSubmit = async (d) => {
    const { data } = await signup(d);
    console.log("USER: ", data);
    if (data.user) {
      setUser({ isLogged: true });
      localStorage.setItem("isLogged", "true");
    }
  };
  return (
    <div>
      <Form btnText="Submit" onSubmit={handleSubmit} />
      <p>
        Already have account?
        <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
}

export default Signup;
