import React, { useState } from "react";
import { useProject } from "../../context/ProjectContext";
import { useHistory } from "react-router-dom";
import { uploadImage } from "../../services/project.service";
//calendario
import Calendar from "react-calendar";
function NewProyect() {
  const initialState = { title: "", description: "", date: "", image: "" };
  const [state, setState] = React.useState(initialState);
  const [value, onChange] = useState(new Date()); // calendario
  const { createProject } = useProject();
  const { push } = useHistory();
  // base: titulo, descripcion, fecha
  const handleUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0]);
    const { data } = await uploadImage(uploadData);
    setState({ ...state, imageUrl: data });
    console.log(state);
  };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createProject(state);
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

      <label for="name">Imagen</label>
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
//<Calendar onChange={onChange} value={value} />
export default NewProyect;
