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
import { getSession } from "../../../services/auth.service";

//Modals
import PostIt from "../../../components/FormModals/PostIt";
import Project from "../../../components/FormModals/Project";

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

      <div className="column">
        {
          //projects.reduce((projects, project) => {
          //return <div>{project.title}</div>;
          //}, [])
        }
      </div>

      <div className="homenotes">
        <div>
          <h2>
            Notas <PostIt />
          </h2>
          <List />
        </div>
        <div className="projects">
          <h2>
            Plan
            <Project />
          </h2>
          <Projects />
        </div>
      </div>
    </div>
  );
}

//<Searchbar query={query} onChange={handleQuery} />

export default Home;
