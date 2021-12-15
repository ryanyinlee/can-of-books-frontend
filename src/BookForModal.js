import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';


export default class BookForModal extends Component {

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <AddBook/>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
