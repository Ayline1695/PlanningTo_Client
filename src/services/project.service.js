import axios from "axios";

const projectApi = axios.create({
  withCredentials: true, // cors, enviar credenciales(estandar)
  baseURL: `${process.env.REACT_APP_API}/projects`,
});

export const getProjects = () => projectApi.get("/");

export const getProject = (projectId) => projectApi.get(`/${projectId}`);

export const createProject = (body) => projectApi.post("/", body);

export const updateProject = (projectId, body) =>
  projectApi.patch(`/${projectId}`, body);

export const deleteProject = (projectId) => projectApi.delete(`/${projectId}`);

export const uploadImage = (file) => projectApi.post("/upload", file);

// tasks

export const getTasksProjects = (projectId) =>
  projectApi.get(`/${projectId}/task`);

export const createTaskProject = (body, projectId) =>
  projectApi.post(`/${projectId}/task`, body);

export const deleteTaskProject = (projectId, taskId) =>
  projectApi.delete(`/${projectId}/task/${taskId}`);
