import React from "react";

function Form({ onSubmit }) {
  const initialState = { email: "", password: "" };
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
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={state.email}
        onChange={handelChange}
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        name="password"
        is="password"
        value={state.password}
        onChange={handelChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
