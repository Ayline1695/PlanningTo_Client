import React from "react";
import "./Time.css";

function Time() {
  const f = new Date();
  const fecha = f.toLocaleDateString();
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
