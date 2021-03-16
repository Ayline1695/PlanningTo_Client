import React from "react";
import { useProject } from "../../../context/ProjectContext";
//importar el contexto que se quiera utilizar
import NewProject from "../../../components/Projects/NewProject";
import { deleteProject } from "../../../services/project.service";

function Project() {
  const { projects, getProjects } = useProject(); // custom hook
  console.log("projects: ", projects);
  React.useEffect(() => {
    getProjects();
  }, []);
  return (
    <div>
      <div>
        {projects.map((p) => (
          <div key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <button
              onClick={async () => {
                const remove = await deleteProject(projects.id);
                console.log("remove", remove);
                getProjects((state) =>
                  state.filter((l) => l.id === projects.id)
                );
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div>
        <NewProject />
      </div>
    </div>
  );
}

export default Project;
