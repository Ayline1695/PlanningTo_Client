import React from "react";
import { useAuth } from "../../context/AuthContext.utils";

function Form({ onSubmit }) {
  const initialState = { username: "", email: "", password: "" };
  const { handleSignup } = useAuth();
  const [state, setState] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const handelChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleSignup(state);
    setIsLoading(false);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={state.username}
        onChange={handelChange}
      />
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
      <button type="submit">Signup</button>
    </form>
  );
}

export default Form;
