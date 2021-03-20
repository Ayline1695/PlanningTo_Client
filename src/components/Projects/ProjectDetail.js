import React from "react";
import { withRouter, Link } from "react-router-dom";
import { getProject } from "../../services/project.service";
import NewTask from "../Projects/NewTask";
import { updateTaskStatus } from "../../services/task.service";

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
    console.log("STATE U:", this.state);
    const selectImage = this.state?.project?.imageUrl
      ? this.state?.project?.imageUrl
      : "../base.jpg";

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
          <div>
            3 primeros
            <h3>Tasks</h3>
          </div>
          <div>
            {this.state?.tasks.map((task, index) => {
              const nextStatus = task.status === "pending" ? "done" : "pending";
              return (
                <div key={index} style={{ border: "1px solid purple" }}>
                  <Link to={`/tasks/${task._id}`}>{task.description}</Link>
                  <p>{task.status}</p>
                  <button
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
                </div>
              );
            })}
          </div>
          <h4>New Task</h4>
          <NewTask
            projectId={this.state.project?._id}
            onSuccess={this.onTaskSuccess}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDetail);
