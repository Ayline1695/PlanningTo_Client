import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, updateUser, uploadImage } from "../../services/auth.service";
import "../FormModals/Modal.css";

function EditUser() {
  const initialState = {
    username: "",
    email: "",
    image: "",
  };
  const [state, setState] = useState(initialState);

  let { userId } = useParams();
  console.log("USER ->", userId);
  React.useEffect(() => {
    getUser(userId).then(({ data }) => setState(data));
    console.log("USER ->", userId);
  }, [setState, userId, getUser]);

  const toggleEdit = (userId) => {
    setState({ userId, status: !state.status });
  };

  const handleUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0]);
    const { data } = await uploadImage(uploadData);
    setState({ ...state, imageUrl: data });
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    await updateUser(userId, state);
  };

  return (
    <div>
      <form className="formModal" onSubmit={handleEdit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
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
      <button onClick={() => toggleEdit(user._id)}>Editar</button>
    </div>
  );
}
export default EditUser;
