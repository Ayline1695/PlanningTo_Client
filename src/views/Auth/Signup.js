import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/FormSignup";
import { signup } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";
import "./Form.css";

function Signup() {
  const { setUser } = useAuth();

  const handleSubmit = async (d) => {
    const { data } = await signup(d);
    console.log("USER: ", data);
    if (data) {
      setUser({ isLogged: true, user: data.user });
      localStorage.setItem("isLogged", "true");
    }
  };
  return (
    <div>
      <h1>Planning To</h1>
      <div className="formBase">
        <Form btnText="Submit" onSubmit={handleSubmit} />
        <p>
          Already have account?
          <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
