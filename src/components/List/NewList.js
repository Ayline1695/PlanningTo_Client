import React from "react";
import { useList } from "../../context/listContext";

function NewList() {
  const initialState = { title: "", description: "" };
  const [state, setState] = React.useState(initialState);
  const { createlist } = useList();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createlist(state);
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
      <button type="submit">Create</button>
    </form>
  );
}
export default NewList;
