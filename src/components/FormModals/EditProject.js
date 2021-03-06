import React from "react";
import { Button, Modal } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "../Projects/EditProject";

class FormModal extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div className="edit-project">
        <div className="post-secundario">
          <Button onClick={this.handleClick}>+</Button>
        </div>
        <Modal className="modalform editform" isOpen={this.state.open}>
          <Button onClick={this.handleClick}>X</Button>
          <Edit />
        </Modal>
      </div>
    );
  }
}

export default FormModal;
