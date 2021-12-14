import { Component } from 'react';
import LoginForm from './LoginForm';
import Button from 'react-bootstrap/Button';

export default class LoginButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showButton: true
    }
  }

  handleClick = () => {
    this.setState({ showButton: false });
  }

  render() {

    /* DONE: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return (
      <div>
        {this.state.showButton ? <Button onClick={this.handleClick}>Log In</Button> : <LoginForm loginHandler={this.props.loginHandler}/>}
      </div>
      )
  }
}
