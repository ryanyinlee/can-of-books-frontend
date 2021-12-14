import React from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
    
      console.log("user: "+ this.state.user);
      
    
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

makeBook = async (newBook) => {
  

  this.setState({ books: [...this.state.books ]})
}

// deleteBook = async (id) => {
// try {
//   await axios.delete(url + '/delete' + id);
//   // remove the book whos id matches the book from the book array
//   const updatedBooks = this.state.books.filter(bookRemoved => bookRemoved._id !== id);
//   this.setState({ books: updatedBooks})
// } catch (error) {
//   console.error(error);
// }

// }



  render() {


    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              
              {/* DONE: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              
              {this.state.user ? <BestBooks user={this.state.user}/> : <Login loginHandler={this.loginHandler}/>}
              
            </Route>
            
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            {this.state.user ? <Profile exact path="/profile"
            name={this.state.user.name}
            email={this.state.user.email}></Profile> : <p></p>}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
