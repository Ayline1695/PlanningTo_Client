//contexto -> objeto compartible
import React from "react";
import {
  getProjects as getProjectsService,
  createProject as createProjectService,
  getTasksProjects as getTasksProjectsService,
  updateProject as updateProjectService,
} from "../services/project.service";

export const ProjectContext = React.createContext({});

function ProjectProvider({ children }) {
  const [projects, setProjects] = React.useState([]);
  const [project, setProject] = React.useState({});

  const getProjects = async () => {
    const { data } = await getProjectsService();
    setProjects(data);
  };

  const createProject = async (body) => {
    const {
      data: { newProject },
    } = await createProjectService(body);
    setProjects((state) => state.concat(newProject));
  };

  const updateProject = async (body) => {
    const { data } = await updateProjectService(body, {
      new: true,
    });
    setProjects(data);
  };

  // task
  const getTasksProjects = async () => {
    const { data } = await getTasksProjectsService();
    setProjects(data);
  };

  // el valor se pasa a todos los hijos
  return (
    <ProjectContext.Provider
      value={{
        getProjects,
        projects,
        createProject,
        getTasksProjects,
        updateProject,
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
