import React from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import BestBooks from './BestBooks.js';
import Profile from './Profile';
import { withAuth0 } from "auth0/auth0-react";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
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

 

componentDidMount() {
  console.log("from app.js this.state.user: " + this.state.user)
}

  render() {


    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
                  
              {this.state.user ? <BestBooks user={this.state.user} /> : <Login loginHandler={this.loginHandler}/>}
            </Route>
                      
            {this.state.user ? 
            <Profile exact path="/profile"
            name={this.state.user.name}
            email={this.state.user.email}>
            </Profile> : <p></p>}
            
          </Switch>
         
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
