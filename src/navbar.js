import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Navbar1 extends Component {

    render() {
        return(
        <Navbar bg="dark" variant="dark">
               <img
        src="/logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Getting started</Nav.Link>
      <Nav.Link href="#pricing">API</Nav.Link>
    </Nav>
        </Navbar>
        );
    }
}

export default Navbar1;