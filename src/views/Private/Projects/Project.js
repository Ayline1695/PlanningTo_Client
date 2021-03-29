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
    <table
      align="center"
      cellSpacing="0"
      cellPadding="0"
      border="0"
      width="100%"
      className="projecto"
    >
      <tbody>
        {projects.map((p) => (
          <tr className="projecto" key={p._id}>
            <td className="imageproject">
              <img alt={p.title} src={p.imageUrl ? p.imageUrl : "./base.jpg"} />
            </td>
            <td>
              <Link to={`/project/${p._id}`}>
                <h3>{p.title}</h3>
              </Link>
            </td>

            <td>
              <p>{p.date}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Project;
