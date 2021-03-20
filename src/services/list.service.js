import axios from "axios";

const listApi = axios.create({
  withCredentials: true, // cors, enviar credenciales(estandar)
  baseURL: `${process.env.REACT_APP_API}/lists`,
});

export const getLists = () => listApi.get("/");

export const getList = (listId) => listApi.get(`/${listId}`);

export const createList = (body) => listApi.post("/", body);

export const updateList = (listId, body) => listApi.patch(`/${listId}`, body);

export const deleteList = (listId) => listApi.delete(`/${listId}`);
