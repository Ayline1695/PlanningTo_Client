import React from "react";
import { withRouter } from "react-router-dom";
import { useProject } from "../../context/ProjectContext";
import { getProject } from "../../services/project.service";

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
    return (
      <div>
        <div
          style={{
            background: `url(${selectImage})no-repeat center`,
          }}
        >
          <h3>{this.state.project.title}</h3>
          <p>{this.state.project.description}</p>
          <h3>{this.state.project.date}</h3>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDetail);
