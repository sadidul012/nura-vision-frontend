import React from 'react';
import logo from '../../logo.svg';
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap';

const Navbar: React.FC = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand href="#">
            <img src={logo} className="App-logo" alt="logo" width={44} />
            NuraVision
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="outline-light" className="ms-2">Get Started</Button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
