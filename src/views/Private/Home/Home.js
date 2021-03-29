import React from "react";
import "./Home.css";
import List from "../Lists/List";
import Projects from "../Projects/Project";
import Time from "../../../components/Clock/Time";

//Modals
import PostIt from "../../../components/FormModals/PostIt";
import Project from "../../../components/FormModals/Project";

function Home() {
  return (
    <div className="home" align="center">
      <Time />

      <div className="contentHome">
        <div className="homenotes">
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

export default Home;
