import { Component } from "react";
import Card from "react-bootstrap/Card";
// import LoginButton from "./LoginButton";

class Profile extends Component {

  render() {

    return (
        /* DONE: render information about logged in user */
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Text>
            <p>Username: {this.props.name}</p>
            <p>E-Mail: {this.props.email}</p>
          </Card.Text>
          {/* DONE: add a `LoginButton` component here that will log the user in */}
          {/* <LoginButton loginHandler={this.props.loginHandler}/> */}
        </Card.Body>
      </Card>
    
        /* STRETCH TODO: if no logged in user then redirect home */
    
    )
  }
};

export default Profile;
