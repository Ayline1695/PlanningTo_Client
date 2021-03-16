import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <div>
      <Form btnText="Signup" onSubmit={handleSubmit} />
      <p>
        Don't have an account yet?
        <Link to={"/Signup"}>Signup</Link>
      </p>
    </div>
  );
}

export default Login;
