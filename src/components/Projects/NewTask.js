import React from "react";
import { createTask as createTaskService } from "../../services/task.service";

function NewTask({ projectId, onSuccess }) {
  const initialState = { title: "", description: "" };
  const [state, setState] = React.useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (projectId) {
      const { data: task } = await createTaskService({
        project: projectId,
        ...state,
      });
      onSuccess?.(task);
      setState(initialState);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add to list : </label>
      <input
        type="text"
        name="title"
        id="title"
        value={state.title}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />

      <button type="submit">Create</button>
    </form>
  );
}
export default NewTask;
