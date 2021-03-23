import React from "react";
import "./Time.css";

function Time() {
  const f = new Date();
  const fecha = f.toLocaleDateString();
  return (
    <div className="date">
      {fecha}
      <div>Proximos Eventos</div>{" "}
    </div>
  );
}

export default Time;
