import React from "react";
import { useProject } from "../../context/ProjectContext";

function NewTask() {
  const initialState = { name: "", isShowing: false };
  const [state, setState] = React.useState(initialState);
  const { createTaskProject } = useProject();
  const toggleForm = () => {
    if (!state.isShowing) {
      setState({ isShowing: true });
    } else {
      setState({ isShowing: false });
    }
  };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createTaskProject(state);
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
      <button onClick={() => toggleForm()}>Create</button>
    </form>
  );
}
export default NewTask;
