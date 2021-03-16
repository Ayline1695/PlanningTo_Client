import React from "react";
import { useProject } from "../../context/ProjectContext";

function NewProyect() {
  const initialState = { title: "", description: "", date: "" };
  const [state, setState] = React.useState(initialState);
  const { createProject } = useProject();
  // base: titulo, descripcion, fecha
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createProject(state);
        setState(initialState);
      }}
    >
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={state.description}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <label>Fecha</label>
      <input
        type="date"
        name="date"
        min="2021-03-2021"
        value={state.date}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <button type="submit">Create</button>
    </form>
  );
}
export default NewProyect;
