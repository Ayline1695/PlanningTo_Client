//contexto -> objeto compartible
import React from "react";
import {
  getProjects as getProjectsService,
  createProject as createProjectService,
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
    // los agrega pero despues de refrescar la página
    return projects;
  };

  // el valor se pasa a todos los hijos
  return (
    <ProjectContext.Provider value={{ getProjects, projects, createProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

//custom hook
export function useProject() {
  return React.useContext(ProjectContext);
}
export default ProjectProvider;
