import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from  "react-bootstrap/Button"


export default class BookForModal extends Component {


  render() {
    console.log("this.props.book in updatebookmodal: " + this.props.thisBook);
    console.log(JSON.stringify(this.props.thisBook));
    
    
    return (
      <>
        <Modal show={this.props.showUpdateModal} onHide={this.props.closeUpdateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update your book!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.props.handleSubmitUpdate}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder={this.props.thisBook.title} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.thisBook.description}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                  <Form.Label>Book Status (Read/Unread)</Form.Label>
                  <Form.Control type="text" placeholder={this.props.thisBook.status} />
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
