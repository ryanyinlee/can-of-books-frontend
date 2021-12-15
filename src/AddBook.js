import { Component } from "react";
import axios from 'axios';
import BestBooks from "./BestBooks";

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

  // deleteBook = async (id) => {

  //   try{
  //     const url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${this.props.user.email}`
  //     await axios.delete(url);
  //     const updatedBooks = this.state.books.filter(book => book._id !== id)
  //     console.log(updatedBooks);
  //     this.setState({ books: updatedBooks })

  //   }catch (e){
  //     console.log(e);
  //   }

      
  // }

  updateBook = async (updatedBookObj, id) => {

    try{

      const updatedBook = await axios.put(process.env.REACT_APP_SERVER_URL + '/books/' + id + updatedBookObj);
      console.log(updatedBook);
      const updatedBookState = this.state.books.map(book => {
        if (book._id === id) {
          return updatedBook.data
        } 
        return book;

      })
      this.setState({ books: updatedBookState})

    }catch (e){
      console.log(e);
    }
  }


  render() {
    
    return (
      <div>

        <BestBooks deleteBook={this.deleteBook} />

      </div>
    // <Container>
        

    //   <Form onSubmit={this.handleSubmit}>

             
    //     <Form.Group className="mb-3" controlId="title">
    //       <Form.Label>Title</Form.Label>
    //       <Form.Control type ="text" placeholder="book title here"/>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="description">
    //       <Form.Label>Book Description</Form.Label>
    //       <Form.Control type ="text" placeholder="description of book here"/>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="status">
    //       <Form.Label>Book Status (Read/Unread)</Form.Label>
    //       <Form.Control type ="text" placeholder="Read or not read?"/>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="email">
    //       <Form.Label>E-Mail</Form.Label>
    //       <Form.Control type ="email" placeholder="e-mail address here"/>
    //     </Form.Group>

    //     <Form.Text>
    //       Your email will be sold to Russian bot farms.
    //     </Form.Text>

    //     <Button type ="submit">Submit Book</Button>
    //   </Form>
    //   </Container>
    )
  }
};

export default AddBook;
