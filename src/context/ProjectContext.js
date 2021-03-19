//contexto -> objeto compartible
import React from "react";
import {
  getProjects as getProjectsService,
  createProject as createProjectService,
  getTasksProjects as getTasksProjectsService,
  createTaskProject as createTaskProjectService,
} from "../services/project.service";

export const ProjectContext = React.createContext({});

function ProjectProvider({ children }) {
  const [projects, setProjects] = React.useState([]);
  console.log("context Projects: ", projects);

  const getProjects = async () => {
    const { data } = await getProjectsService();
    console.log("Project DATA: ", data);
    setProjects(data);
  };

  const createProject = async (l) => {
    const { data: projects } = await createProjectService(l);
    setProjects((state) => state.concat(projects));
    return projects;
  };

  // task
  const getTasksProjects = async () => {
    const { data } = await getTasksProjectsService();
    console.log("Project DATA: ", data);
    setProjects(data);
  };

  const createTaskProject = async (l) => {
    const { data: projects } = await createTaskProjectService(l);
    setProjects((state) => state.concat(projects));
    console.log("create task project", projects);
    return projects;
  };

  // el valor se pasa a todos los hijos
  return (
    <ProjectContext.Provider
      value={{
        getProjects,
        projects,
        createProject,
        getTasksProjects,
        createTaskProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

//custom hook
export function useProject() {
  return React.useContext(ProjectContext);
}
export default ProjectProvider;
