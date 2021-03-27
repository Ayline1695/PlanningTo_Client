import React from "react";
import "./Time.css";
import { useProject } from "../../context/ProjectContext";

function Time() {
  const { projects, getProjects } = useProject(); // custom hook
  console.log("TIME Projects results ->", projects);
  React.useEffect(() => {
    getProjects();
  }, []);

  const f = new Date();
  const fecha = f.toLocaleDateString();

  //  <div>
  //  {projects.sort((a, b) => toTimestamp(a.date) - toTimestamp(b.date))}
  //</div>

  return (
    <div className="date">
      <span className="fecha">{fecha}</span>

      <h3>Proximos Eventos</h3>
      <div className="eventos">
        {projects.map((p) => (
          <div className="eventos" key={p._id}>
            {p.date}__{p.title}
          </div>
        ))}
      </div>
    </div>
  );
}

function toTimestamp(date) {
  return new Date(date).toTimestamp();
}

export default Time;
