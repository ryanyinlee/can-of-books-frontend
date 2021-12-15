import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";


export default class BookForModal extends Component {
handleSubmit = (event) => {
    event.preventDefault();
    
    const updatedBook = {
        title: event.target.title.value || this.props.book.title,
        description: event.target.description.value || this.props.book.description,
        status: event.target.status.value || this.props.book.value,
        email: event.target.email.value || this.props.book.value
    }


}



  render() {
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

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={this.props.book.email}
                  />
                </Form.Group>

                <Form.Text>
                  Your email will be sold to Russian bot farms.
                </Form.Text>

                <Button type="submit">Submit Updated Book</Button>
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
