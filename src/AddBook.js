import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null,
        }
      }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
        title: event.target.title.value,
        description: event.target.description.value,
        status: event.target.status.value,
        email: event.target.email.value
    }
    console.log(newBook);
    
  }


  render() {
    
    return (
    <Container>
        

      <Form onSubmit={this.handleSubmit}>

             
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type ="text" placeholder="book title here"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Book Description</Form.Label>
          <Form.Control type ="text" placeholder="description of book here"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Book Status (Read/Unread)</Form.Label>
          <Form.Control type ="text" placeholder="Read or not read?"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control type ="email" placeholder="e-mail address here"/>
        </Form.Group>

        <Form.Text>
          Your email will be sold to Russian bot farms.
        </Form.Text>

        <Button type ="submit">Submit Book</Button>
      </Form>
      </Container>
    );
  }
};

export default AddBook;