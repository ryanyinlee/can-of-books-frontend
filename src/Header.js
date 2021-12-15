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
        {/* DONE: if the user is logged in, render a navigation link to profile page */}
        {this.props.user ? <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem> : <p></p>}

        {this.props.user ? <NavItem><Link to="/addbook" className="nav-link">Add a Book</Link></NavItem> : <p></p>}

        {/* DONE: if the user is logged in, render the `LogoutButton` */}
        {this.props.user ? <NavItem><LogoutButton>Log Out</LogoutButton></NavItem> : <p>Log in to enter books.</p>}
      </Navbar>
    )
  }
}

export default Header;
