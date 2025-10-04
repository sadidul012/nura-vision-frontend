import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../logo.svg';
import {Navbar as BSNavbar, Nav, Container} from 'react-bootstrap';

const MainMenu: React.FC = () => {
    return (
        <BSNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <BSNavbar.Brand as={Link} to="/">
                    <img src={logo} className="App-logo" alt="logo" width={44}/>
                    NuraVision
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav"/>
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/features">Features</Nav.Link>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        <a className="ms-2 btn btn-outline-light" href={"/demo"}>
                            Try Demo
                        </a>
                        <a className="ms-2 btn btn-outline-info" href={"/register"}>
                            Get Started
                        </a>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default MainMenu;
