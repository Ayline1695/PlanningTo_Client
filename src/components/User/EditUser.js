import React, { useState } from "react";

import { getUser, updateUser, uploadImage } from "../../services/auth.service";
import "../FormModals/Modal.css";
import { useAuth } from "../../context/AuthContext.utils";

function EditUser() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { user, handleUserUpdate } = useAuth();
  const initialState = {
    username: "",
    image: "",
  };
  const [state, setState] = useState(initialState);

  React.useEffect(() => {
    getUser(user._id).then(({ data }) => setState(data));
  }, [setState, user._id, getUser]);

  const toggleEdit = () => {
    setState({ status: !state.status });
  };

  const handleUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("file", e.target.files[0]);

    const { data } = await uploadImage(uploadData);

    setState({ ...state, imageUrl: data });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data } = await updateUser(user._id, state);
    setIsLoading(false);
    handleUserUpdate({
      ...user,
      username: data.username,
      imageUrl: data.imageUrl,
      isLogged: true,
    });
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
    <div className="formUser">
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
