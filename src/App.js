import React from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import BookForModal from './BookForModal';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      books: [],
      showModal: false
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })    
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

// handleSubmit = (event) => {
// event.preventDefault();
// const newBook = {
//     title: event.target.title.value,
//     description: event.target.description.value,
//     status: event.target.status.value,
//     email: event.target.email.value
// }
// this.makeBook(newBook);
// }

makeBook = async (newBook) => {

try{

  const userBook = await axios.post(process.env.REACT_APP_SERVER_URL + '/books', newBook);
  // console.log(newBook);
  this.setState({ books: [...this.state.books, userBook.data ] })

}catch (e){
  console.log("error: " + e);
}

  
}

deleteBook = async (id) => {
console.log("ID is: " + id);
try{
  const url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${this.state.user.email}`
  console.log(url);
  await axios.delete(url);
  
  const updatedBooks = this.state.books.filter(book => book._id !== id);
  console.log("id: " + id);
  console.log("updatedBooks: " + updatedBooks);
  this.setState({ books: updatedBooks })

}catch (e){
  console.log("error: "+ e);
}

  
}

updateBook = async (updatedBookObj, id) => {

try{

  const updatedBook = await axios.put(process.env.REACT_APP_SERVER_URL + '/books/' + id + updatedBookObj);
  const updatedBookState = this.state.books.map(book => {
    if (book._id === id) {
      return updatedBook.data
    } 
    return book;

  })
  this.setState({ books: updatedBookState})

}catch (e){
  console.log("error: "+ e);
}
}

getBooks = async () => {

  let url = `${process.env.REACT_APP_SERVER_URL}/books`;
  
  if (this.state.user) {
    url = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.state.user.email}`;
    
  }
  
  try {
    let result = await axios.get(url);
    
    this.setState({ books: result.data })
   
    this.setState({ error: false });
  }
  catch (error) {
    console.error(error);
    this.setState({ error: true });
  }
}

componentDidMount() {
  this.getBooks();
}

  render() {


    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              
              {/* DONE: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              
              {this.state.user ? <BestBooks deleteBook={this.deleteBook} books={this.state.books} /> : <Login loginHandler={this.loginHandler}/>}

              
              
              </Route>
            
            {/* DONE: add a route with a path of '/profile' that renders a `Profile` component */}
            {this.state.user ? <Profile exact path="/profile"
            name={this.state.user.name}
            email={this.state.user.email}>
            </Profile> : <p></p>}
            {(this.state.user && this.state.showModal) ? <BookForModal makeBook ={this.props.makeBook} showModal = {this.state.showModal} closeModal = {this.state.closeModal} /> : <Button onClick = {this.handleClick} >Add A Book</Button>}
            
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
