import React from "react";
import { withRouter } from "react-router-dom";
import { getTasksProjects } from "../../services/project.service";

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { taskId } = this.props.match.params;
    getTasksProjects(taskId).then(({ data }) => {
      this.setState({ task: data });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>{this.state.name}</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(TaskDetail);
