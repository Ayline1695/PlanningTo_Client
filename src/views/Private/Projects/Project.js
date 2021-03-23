import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import { useProject } from "../../../context/ProjectContext";
//importar el contexto que se quiera utilizar

function Project() {
  const { projects, getProjects } = useProject(); // custom hook

  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <div>
        {projects.map((p, idx) => (
          <div key={idx} className="projecto">
            <Link to={`/project/${p._id}`}>
              <h3>{p.title}</h3>
            </Link>
            <img
              style={{
                height: "50px",
                width: "100px",
              }}
              alt={p.title}
              src={p.imageUrl ? p.imageUrl : "./base.jpg"}
            />
            <p>{p.description}</p>
            <p>Creado: {p.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
