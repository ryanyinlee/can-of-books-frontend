import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import { Component } from "react";
// import Button from "react-bootstrap/Button";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Best Books</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
