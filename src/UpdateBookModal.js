import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from  "react-bootstrap/Button"


export default class BookForModal extends Component {
handleSubmit = (event) => {
    event.preventDefault();
    
    const updatedBook = {
        title: event.target.title.value || this.props.book.title,
        description: event.target.description.value || this.props.book.description,
        status: event.target.status.value || this.props.book.status
    }
    this.props.updateBook(updatedBook, this.props.book._id);
    this.props.closeModal();

}

  render() {
    console.log("this.props.book in updatebookmodal: " + this.props.book);
    console.log("this.props.book._id in updatebookmodal: " + this.props.book._id);
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update your book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder={this.props.book.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.book.description}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Book Status (Read/Unread)</Form.Label>
                  <Form.Control type="text" placeholder={this.props.book.status} />
                </Form.Group>
                <Button type="submit">Submit Updated Book</Button>
              </Form>
            </Container>
          </Modal.Body>

        </Modal>
      </>
    );
  }
}
