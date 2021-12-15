import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class BookForModal extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>

              <Form onSubmit={this.handleSubmit}>
                
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="book title here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="description of book here"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Book Status (Read/Unread)</Form.Label>
                  <Form.Control type="text" placeholder="Read or not read?" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="e-mail address here"
                  />
                </Form.Group>

                <Form.Text>
                  Your email will be sold to Russian bot farms.
                </Form.Text>

                <Button type="submit">Submit Book</Button>
              </Form>
            </Container>
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
