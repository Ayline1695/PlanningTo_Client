import React from "react";
import { Link } from "react-router-dom";
import { useProject } from "../../../context/ProjectContext";
//importar el contexto que se quiera utilizar
import NewProject from "../../../components/Projects/NewProject";
import { deleteProject } from "../../../services/project.service";

function Project() {
  const { projects, getProjects } = useProject(); // custom hook

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
            <img
              style={{ height: "150px", width: "200px" }}
              alt={p.title}
              src={p.imageUrl ? p.imageUrl : "./base.jpg"}
            />
            <p>{p.description}</p>
            <p>Creado: {p.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
