import React from "react";
import { createTask as createTaskService } from "../../services/task.service";

function NewTask({ projectId, onSuccess }) {
  const initialState = { title: "", description: "" };
  const [state, setState] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (projectId) {
      const { data: task } = await createTaskService({
        project: projectId,
        ...state,
      });
      onSuccess?.(task);
      setIsLoading(false);
      setState(initialState);
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
    <form onSubmit={handleSubmit} className="task-form">
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
