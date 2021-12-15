import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null,
          books: []
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
    this.makeBook(newBook);
    console.log(newBook);
    
  }

  makeBook = async (newBook) => {

    try{

      const userBook = await axios.post(process.env.REACT_APP_SERVER_URL + '/books', newBook);
      console.log(newBook);
      this.setState({ books: [...this.state.books, userBook.data ] })

    }catch (e){
      console.log(e);
    }

      
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
