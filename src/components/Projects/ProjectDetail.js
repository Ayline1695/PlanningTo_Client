import React from "react";
import CuentaAtras from "./CountDown";
import { withRouter } from "react-router-dom";
import { useProject } from "../../context/ProjectContext";
import { getProject, getTasksProjects } from "../../services/project.service";
import NewList from "../List/NewList";
import NewTask from "../Projects/NewTask";

//prueba
import Task from "../../views/Private/Task/Task";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
    };
  }
  componentDidMount() {
    const { projectId } = this.props.match.params;
    getProject(projectId).then(({ data }) => {
      this.setState({ project: data });
    });
  }

  render() {
    console.log("STATE U:", this.state);
    const selectImage = this.state.project.imageUrl
      ? this.state.project.imageUrl
      : "../base.jpg";
    //<CuentaAtras DateTo={this.state.project.date} />
    return (
      <div>
        <div
          style={{
            background: `url(${selectImage})no-repeat center`,
            textAlign: "center",
          }}
        >
          <h3>{this.state.project.title}</h3>
          <p>{this.state.project.description}</p>

          <h3>{this.state.project.date}</h3>
        </div>
        <div>
          <h4>New List</h4>
          <NewList />
        </div>
        <div>
          <div>
            3 primeros
            {this.state.tasks && this.state.tasks.length > 0 && <h3>Tasks </h3>}
          </div>
          <div>
            {this.state.project.tasks &&
              this.state.project.tasks.map((task, index) => {
                return (
                  <div key={index}>
                    <Link
                      to={`/projects/${this.state._id}/tasks/${this.state.project.task._id}`}
                    >
                      {task.name}
                    </Link>
                  </div>
                );
              })}
          </div>
          <h4>New Task</h4>
          No se ve el nombre de la nueva task
          <NewTask />
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDetail);
