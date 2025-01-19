import { CartContext } from "../context/CartContext";
import { formatCurr } from "../utils/formatCurr";
import { Navbar as BootstrapNavbar, Container, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useContext} from 'react';

function NavBar() {
    const { getTotal } = useContext(CartContext);

    const total = getTotal()

    const token = true; // simula el estado del usuario

    return (
        <BootstrapNavbar bg="dark" variant="dark" className="sticky-top">
            <Container fluid className="d-flex justify-content-between">
                <BootstrapNavbar.Brand>Pizzería Mamma Mia!</BootstrapNavbar.Brand>
                <Nav>
                    <Link to="/" className="btn btn-outline-light me-2">🍕 Home</Link>
                    {token ? (
                        <>
                            <Link to="login" className="btn btn-outline-light me-2">🔐 Login</Link>
                            <Link to="register" className="btn btn-outline-light me-2">🔐 Register</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="btn btn-outline-light me-2">🔒 Logout</Link>
                            <Link to="profile" className="btn btn-outline-light me-2">🔓 Profile</Link>
                          
                        </>
                    )}
                </Nav>
                <Link to="cart" className="btn btn-outline-light me-2">🛒 Total ${formatCurr(total)}</Link>
            </Container>
        </BootstrapNavbar>
    );
}

export default NavBar;
