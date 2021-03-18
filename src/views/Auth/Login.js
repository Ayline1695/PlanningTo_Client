import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/FormLogin";
import { login } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";
import "./Form.css";

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
      <h1>Planning To</h1>
      <div className="formBase">
        <Form btnText="Signup" onSubmit={handleSubmit} />
        <p>
          Don't have an account yet?
          <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
