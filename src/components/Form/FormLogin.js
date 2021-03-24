import React from "react";
import { useAuth } from "../../context/AuthContext.utils";
import { useHistory } from "react-router-dom";

function Form({ onSubmit }) {
  const initialState = { email: "", password: "" };
  const { handleLogin } = useAuth();
  const [state, setState] = React.useState(initialState);

  const handelChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //onSubmit(state);
    //setState(initialState);
    await handleLogin(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={state.email}
        onChange={handelChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handelChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
