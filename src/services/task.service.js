import axios from "axios";

const taskApi = axios.create({
  withCredentials: true, // cors, enviar credenciales(estandar)
  baseURL: `${process.env.REACT_APP_API}/task`,
});

export const getTasks = () => taskApi.get("/");

export const createTask = (body) => taskApi.post("/", body);

export const updateTaskStatus = (taskId, status) =>
  taskApi.patch(`/${taskId}`, { status });

export const deleteTask = (taskId) => taskApi.delete(`/${taskId}`);
