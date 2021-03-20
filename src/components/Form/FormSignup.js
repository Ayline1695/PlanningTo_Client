import React from "react";

function Form({ onSubmit }) {
  const initialState = { username: "", email: "", password: "" };
  const [state, setState] = React.useState(initialState);

  const handelChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState(initialState);
  };
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
