import React from "react";
import { Button, Modal } from "reactstrap";
import List from "../List/NewPostIt";
import Project from "../../../components/Projects/NewProject";

class FormModal extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div
        className="principal"
        style={{ alignItems: "center", display: "flex" }}
      >
        <div className="add">
          <ul>
            <li>
              <Button color="success" onClick={this.handleClick}>
                + Plan
              </Button>
            </li>
            <li>
              <Button color="success" onClick={this.handleClick}>
                + Note
              </Button>
            </li>
            <li>
              <Button color="success" onClick={this.handleClick}>
                + Task
              </Button>
            </li>
          </ul>
        </div>
        <div className="secundario" style={{ margin: "0 auto" }}>
          <Button color="success" onClick={this.handleClick}>
            + Note
          </Button>
        </div>
        <Modal isOpen={this.state.open}>
          <List />
          <Button color="secundary" onClick={this.handleClick}>
            X
          </Button>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
