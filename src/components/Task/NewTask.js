import React from "react";
import { useTask } from "../../context/TaskContext";

function NewTask() {
  const initialState = { name: "" };
  const [state, setState] = React.useState(initialState);
  const { createTask } = useTask();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createTask(state);
        console.log(state);
        setState(initialState);
      }}
    >
      <label>Title</label>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <button type="submit">Create</button>
    </form>
  );
}
export default NewTask;
