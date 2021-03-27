import React, { useState } from "react";
import { useProject } from "../../context/ProjectContext";
import { useHistory } from "react-router-dom";
import { uploadImage } from "../../services/project.service";

function NewProyect() {
  const initialState = { title: "", description: "", date: "", image: "" };
  const [state, setState] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const { createProject } = useProject();
  const { push } = useHistory();

  const handleUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0]);

    const { data } = await uploadImage(uploadData);

    setState({ ...state, imageUrl: data });
  };
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <form
      className="formModal"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await createProject(state);
        setIsLoading(false);
        setState(initialState);
      }}
    >
      <label>Nombre</label>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <label>Fecha</label>

      <input
        type="date"
        name="date"
        min="20/03/2021"
        value={state.date}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <label>Descripción</label>
      <input
        type="text"
        name="description"
        value={state.description}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />

      <label>Imagen</label>
      <input
        type="file"
        name="image"
        id="image"
        multiple
        value={state.image}
        onChange={handleUpload}
      ></input>
      <button type="submit">Create</button>
    </form>
  );
}

export default NewProyect;
