import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/FormLogin";
import { login } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext.utils";
import "./Form.css";

function Login() {
  const { user, setUser } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (d) => {
    setIsLoading(true);
    const { data } = await login(d);
    setIsLoading(false);
    if (data) {
      setUser({ isLogged: true, user: data });
      localStorage.setItem("isLogged", "true");
    }
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
  return (
    <div align="center" className="formContainer">
      <div className="imageTop">
        <img className="imageDis" alt="logo home" src="./checkhome.gif" />
        <img
          className="imageRes"
          alt="logo home res"
          src="./checkhome-res.gif"
        />
      </div>

      <div className="formBase">
        <Form btnText="Signup" onSubmit={handleSubmit} />
        <p>
          Don't have an account yet?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
