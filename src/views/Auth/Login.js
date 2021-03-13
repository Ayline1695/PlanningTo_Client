import React from "react";
//import { Redirect } from "react-router-dom";
import Form from "../../components/Form/Form";
import { login } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";

function Login() {
  const { setUser } = useAuth();
  console.log("AQUI");
  //const [redirect, setRedirect] = React.useState(false);
  const handleSubmit = async (d) => {
    const { data } = await login(d);
    if (data.user) {
      setUser({ isLogged: true });
      localStorage.setItem("isLogged", "true");
    }
  };
  return <Form onSubmit={handleSubmit} />;
}

export default Login;
