import axios from "axios";

const taskApi = axios.create({
  withCredentials: true, // cors, enviar credenciales(estandar)
  baseURL: "http://localhost:4000/task",
});

export const getTasks = () => taskApi.get("/");

export const createTask = (body) => taskApi.post("/", body);

export const deleteTask = (taskId) => taskApi.delete(`/${taskId}`);
