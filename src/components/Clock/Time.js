import React from "react";
import "./Time.css";
import { useProject } from "../../context/ProjectContext";
import propTypes from "prop-types";

function Time({ title, date }) {
  const { projects, getProjects } = useProject(); // custom hook

  React.useEffect(() => {
    getProjects();
  }, []);

  const f = new Date();
  const fecha = f.toLocaleDateString();

  return (
    <div>
      <h3 className="titleDate">Ultimos Eventos</h3>

      <div className="date">
        <span className="fecha">{fecha}</span>
        <div className="eventos">
          <div className="eventos">
            {date} __ {title}
          </div>

          {projects.map((p) => (
            <div className="eventos" key={p._id}>
              {p.date}__{p.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Time.defaultProps = {
  title: "Nuevo evento",
  date: "2022-04-22",
};

Time.propTypes = {
  title: propTypes.string,
  date: propTypes.Date,
};

export default Time;
