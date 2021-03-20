import { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../../components/User/PrivateRoute";
//import AnonRoute from "../../components/User/AnonRoute";
//import Signup from "../Auth/Signup";
//import Login from "../Auth/Login";
import Navbar from "../Navbar/Navbar";
import List from "../Lists/List";
import Task from "../Task/Task";
import Projects from "../Projects/Project";
import Searchbar from "../../../components/Search/SearchBar";

function Home() {
  return (
    <div>
      <li>+ Lista / notas</li>
      <li>+ Proyectos</li>
      <li>+ Tasks/lista</li>
      <li>Eventos segun fecha</li>
      <li>Ultimos proyectos agregados</li>
      <div>{EventsShow()}</div>
      <div>
        <h2>Lista o Notas mas bien, reduce 5 primeros</h2>
      </div>
      <div>
        <h2>Proyectos o Planes</h2>
        <Projects />
      </div>
      <div>
        <h2>Tasks / Lista de checks reduce 5 primeros</h2>
      </div>
    </div>
  );
}

function EventsShow() {
  return (
    <div>
      <h1>Proximos eventos "Fecha hoy"</h1>
      <div>eventos</div>
    </div>
  );
}

export default Home;
