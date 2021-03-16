import { useState } from "react";
import { Link } from "react-router-dom";
//import AnonRoute from "../../components/User/AnonRoute";
//import Signup from "../Auth/Signup";
//import Login from "../Auth/Login";
import Navbar from "../Navbar/Navbar";
import List from "../Lists/List";
import Task from "../Task/Task";
import Projects from "../Projects/Project";
import Searchbar from "../../../components/Search/SearchBar";

function Home() {
  //const [projects, setProjects] = useState([]);
  //const [query, setQuery] = useState("");
  //const search = (searchValue) => {
  //  setQuery(searchValue);
  //};
  //useEffect(() => {
  //  if (!query) {
  //    getAllBeersService()
  //      .then(({ data }) => setBeers(data))
  //      .catch((err) => console.log(err));
  //  }
  //}, [query]);
  //<Searchbar searchBeer={searchBeer} />
  return (
    <div>
      HOME PRIVATE + navbar
      <li>+ Lista / notas</li>
      <li>+ Proyectos</li>
      <li>+ Tasks/lista</li>
      <li>Eventos segun fecha</li>
      <li>Ultimos proyectos agregados</li>
      <div>{EventsShow()}</div>
      <div>
        <h2>Lista o Notas mas bien</h2>
        <List />
      </div>
      <div>
        <h2>Proyectos o Planes</h2>
        <Projects />
      </div>
      <div>
        <h2>Tasks / Lista de checks</h2>
        <Task />
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
