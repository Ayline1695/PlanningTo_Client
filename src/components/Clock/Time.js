import React from "react";
import "./Time.css";
import { useProject } from "../../context/ProjectContext";

function Time() {
  const { projects, getProjects } = useProject(); // custom hook

  React.useEffect(() => {
    getProjects();
  }, []);

  const f = new Date();
  const fecha = f.toLocaleDateString();
  //const dates = f.toTimestamp();

  return (
    <div className="date">
      <span className="fecha">{fecha}</span>

      <h3>Proximos Eventos</h3>
      <div className="eventos">
        <div>03/04 __ Evento 1 </div>
        <div>12/04 __ Evento 2 </div>
        <div>24/04 __ Evento 3 </div>
      </div>
    </div>
  );
}

export default Time;
