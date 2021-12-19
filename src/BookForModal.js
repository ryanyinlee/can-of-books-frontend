import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



export default class BookForModal extends Component {


  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Enter your book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleSubmit}>
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
              <Button type="submit">Add Book!</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
