import React, { useState } from "react";
import { uploadImage } from "../../services/project.service";

export default function ListForm({ onSubmit, projectInfo }) {
  const [state, setState] = useState(projectInfo);

  const handleChange = async (e) => {
    const newstate = [...state];
    newstate[e.target.name] = e.target.value;
    setState(newstate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(projectInfo._id, state);
    toggleEdit(projectInfo._id);
  };

  const handleUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0]);
    const { data } = await uploadImage(uploadData);
    setState({ ...state, imageUrl: data });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Guardar</button>
      </form>
      <hr />
    </div>
  );
}
