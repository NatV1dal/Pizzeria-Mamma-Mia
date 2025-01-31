import React from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"
import { formatCurr } from "../utils/formatCurr"
import { Navbar as BootstrapNavbar, Container, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useContext} from 'react';

function NavBar() {
    const { getTotal } = useContext(CartContext);
    const { user, logout } = useContext(UserContext);
    const total = getTotal();

    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="sticky-top"> 
            <Container fluid>
                <BootstrapNavbar.Brand> 🍕 Pizzería Mamma Mia!</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" /> 
                <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-center"> 
                    <Nav>
                        <Link to="/" className="btn btn-outline-light me-2">🍕 Home</Link>
                        {user ? (
                            <>
                                <Link to="/profile" className="btn btn-outline-light me-2">🔓 Profile</Link>
                                <button className="btn btn-outline-light me-2" onClick={logout} >🔒 Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-light me-2">🔐 Login</Link>
                                <Link to="/register" className="btn btn-outline-light me-2">🔐 Register</Link>
                            </>
                        )}
                        <Link to="cart" className="btn btn-outline-light me-2 d-lg-none">🛒 Total ${formatCurr(total)}</Link> 
                    </Nav>
                </BootstrapNavbar.Collapse>
                <Link to="cart" className="btn btn-outline-light me-2 ms-auto d-none d-lg-inline">🛒 Total ${formatCurr(total)}</Link> 
            </Container>
        </BootstrapNavbar>
    );
}

export default NavBar;