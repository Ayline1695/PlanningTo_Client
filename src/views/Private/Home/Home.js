import React from "react";
import "./Home.css";
import { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import List from "../Lists/List";
import Task from "../Task/Task";
import Projects from "../Projects/Project";
import Searchbar from "../../../components/Search/SearchBar";
import Time from "../../../components/Clock/Time";
import { useProject } from "../../../context/ProjectContext";

//<li>+ Lista / notas</li>
//<li>+ Tasks/lista</li>
//<li>Eventos segun fecha</li>
//<li>Ultimos proyectos agregados</li>

function Home() {
  //search bar
  const [query, setQuery] = useState("");
  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };
  const { projects, getProjects } = useProject(); // custom hook

  React.useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="home" align="center">
      <Time />

      <Searchbar query={query} onChange={handleQuery} />
      <div className="column">
        {projects.reduce((projects, project) => {
          return <div>{project.title}</div>;
        }, [])}
      </div>

      <div className="homenotes">
        <div>
          <h2>Notas</h2>
          <List />
        </div>
        <div className="projects">
          <h2>Plan</h2>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Home;
