import React from "react";
import { Button, Modal } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import NewProject from "../Projects/NewProject";

class FormModal extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <div className="post-secundario">
          <Button color="success" onClick={this.handleClick}>
            +
          </Button>
        </div>
        <Modal className="modalform" isOpen={this.state.open}>
          <Button onClick={this.handleClick}>X</Button>
          <NewProject />
        </Modal>
      </>
    );
  }
}

export default FormModal;
