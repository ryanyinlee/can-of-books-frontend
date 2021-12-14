import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {this.props.user ? <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem> : <p></p>}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        {this.props.user ? <NavItem><LogoutButton>Log Out</LogoutButton></NavItem> : <p></p>}
      </Navbar>
    )
  }
}

export default Header;
