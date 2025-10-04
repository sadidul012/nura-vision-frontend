import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../logo.svg';
import {Navbar as BSNavbar, Nav, Container} from 'react-bootstrap';
import {useAuth} from "../../../context/AuthContext";

const MainMenu: React.FC = () => {
    const {user, logout} = useAuth();

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

                        {user && (
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>

                                {user.role === "admin" && (
                                    <Nav.Link as={Link} to="/admin/dashboard">Admin</Nav.Link>
                                )}
                            </>
                        )}

                        <Nav.Link as={Link} to="/features">Features</Nav.Link>
                        <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        {user && (
                            <>
                                <button className="btn btn-outline-danger" onClick={logout}>
                                    Logout
                                </button>
                            </>
                        )}

                        {!user && (
                            <>
                                <li className="nav-item me-2">
                                    <Nav.Link as={Link} className="btn btn-outline-light btn-sm" to="/login">
                                        Login
                                    </Nav.Link>
                                </li>
                                <li className="nav-item">
                                    <Nav.Link as={Link} className="btn btn-primary btn-sm" to="/register">
                                        Register
                                    </Nav.Link>
                                </li>
                            </>
                        )}

                        < a className="ms-2 btn btn-outline-info" href={"/register"}>
                            Get Started
                        </a>
                        <a className="ms-2 btn btn-outline-light" href={"/demo"}>
                            Try Demo
                        </a>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default MainMenu;
