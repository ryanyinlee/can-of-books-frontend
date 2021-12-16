import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();

    const user = {name: event.target.userName.value, email: event.target.email.value}
    
    this.props.loginHandler(user);
    
  }


  render() {
    /* DONE: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username</Form.Label>
          <Form.Control type ="text" placeholder="username here"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type ="email" placeholder="email here"/>
        </Form.Group>
        <Form.Text>
          Your email will be sold to Russian bot farms.
        </Form.Text>

        <Button type ="submit">Log In</Button>
      </Form>
    );
  }
};

export default LoginForm;
