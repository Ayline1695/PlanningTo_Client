import React from "react";
import { Button, Modal } from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import List from "../List/NewPostIt";
import "./Modal.css";

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
        <div className="post-secundario edit-post" style={{ margin: "0 auto" }}>
          <Button onClick={this.handleClick}>+</Button>
        </div>
        <div>
          <Modal className="modalform" isOpen={this.state.open}>
            <Button onClick={this.handleClick}>X</Button>
            <List />
          </Modal>
        </div>
      </>
    );
  }
}

export default FormModal;
