import React from "react";
import { Link } from "react-router-dom";
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
        {projects.map((p, idx) => (
          <div key={idx}>
            <Link to={`/project/${p._id}`}>
              <h3>{p.title}</h3>
            </Link>
            <img alt={p.title} src={p.imageUrl ? p.imageUrl : "./base.jpg"} />
            <p>{p.description}</p>
            <p>Fecha final: {p.date}</p>
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
    </div>
  );
}

//<div>
//SLICE
//{projects.slice(projects.length - 5)}
//</div>

export default Project;
