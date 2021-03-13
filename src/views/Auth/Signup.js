import React from "react";
import { Redirect } from "react-router-dom";
import Form from "../../components/Form/Form";
import { signup } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";

function Signup() {
  const { setUser } = useAuth();
  //const [redirect, setRedirect] = React.useState(false);
  const handleSubmit = async (d) => {
    const { data } = await signup(d);
    console.log("USER: ", data);
    if (data.user) {
      setUser({ isLogged: true });
      localStorage.setItem("isLogged", "true");
    }
  };
  return <Form onSubmit={handleSubmit} />;
}

export default Signup;
