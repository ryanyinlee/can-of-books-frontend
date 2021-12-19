import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from  "react-bootstrap/Button"


export default class BookForModal extends Component {


  render() {
    console.log("this.props.book in updatebookmodal: " + this.props.oneBook);
    console.log(JSON.stringify(this.props.oneBook));
    
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update your book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.props.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder={this.props.oneBook.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.oneBook.description}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Book Status (Read/Unread)</Form.Label>
                  <Form.Control type="text" placeholder={this.props.oneBook.status} />
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
