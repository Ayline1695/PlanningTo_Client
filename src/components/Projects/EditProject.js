import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProject, updateProject } from "../../services/project.service";

function EditProject() {
  const initialState = {
    title: "",
    description: "",
    date: "",
    image: "",
  };
  const [state, setState] = useState(initialState);

  let { projectId } = useParams();

  React.useEffect(() => {
    getProject(projectId).then(({ data }) => setState(data.project));
  }, [setState, projectId, getProject]);

  const toggleEdit = (projectId) => {
    setState({ projectId, status: !state.status });
  };

  const handleUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0]);
    const { data } = await uploadImage(uploadData);
    setState({ ...state, imageUrl: data });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    await updateProject(projectId, state);
  };

  return (
    <div>
      <form className="formModal" onSubmit={handleEdit}>
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
        />
        <button type="submit">Guardar</button>
      </form>
      <button onClick={() => toggleEdit(list._id)}>Editar</button>
    </div>
  );
}
export default EditProject;
