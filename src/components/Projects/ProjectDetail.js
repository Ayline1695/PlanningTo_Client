import React from "react";
import { withRouter } from "react-router-dom";
import { getProject } from "../../services/project.service";
import NewTask from "../Projects/NewTask";
import { updateTaskStatus, deleteTask } from "../../services/task.service";
import EditProject from "../FormModals/EditProject";
import "./ProjectDetail.css";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      tasks: [],
    };
  }
  componentDidMount() {
    const { projectId } = this.props.match.params;
    getProject(projectId).then(({ data }) => {
      this.setState(data);
    });
  }

  onTaskSuccess = (task) => {
    this.setState((state) => ({ ...state, tasks: [task, ...state.tasks] }));
  };

  render() {
    const selectImage = this.state?.project?.imageUrl
      ? this.state?.project?.imageUrl
      : "../base.jpg";

    return (
      <div>
        <div
          className="titleDetails"
          style={{
            background: `url(${selectImage}) no-repeat center`,
            textAlign: "center",
          }}
        >
          <h2>{this.state.project.title}</h2>
          <p>{this.state.project.description}</p>
          <h3>{this.state.project.date}</h3>
        </div>
        <div>
          <div className="containerTask">
            <NewTask
              projectId={this.state.project?._id}
              onSuccess={this.onTaskSuccess}
            />
            <ul>
              {this.state?.tasks.map((task, index) => {
                const nextStatus = task.status === "done" ? "pending" : "done";
                return (
                  <li key={index}>
                    <button
                      className="taskStatus"
                      onClick={async () => {
                        await updateTaskStatus(task._id, nextStatus);
                        this.setState((state) => ({
                          ...state,
                          tasks: state.tasks.map((t) =>
                            t._id === task._id
                              ? { ...task, status: nextStatus }
                              : t
                          ),
                        }));
                      }}
                    >
                      {nextStatus}
                    </button>
                    <button
                      className="taskDelete"
                      onClick={async () => {
                        await deleteTask(task._id);
                        this.setState((state) => ({
                          ...state,
                          tasks: state.tasks.filter((t) => t._id !== task._id),
                        }));
                      }}
                    >
                      X
                    </button>
                    {task.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          Editar
          <EditProject />
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDetail);
