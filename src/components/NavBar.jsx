import { formatCurr } from "../utils/formatCurr";
import { Navbar as BootstrapNavbar, Container, Button, Nav } from "react-bootstrap";

function NavBar() {
    const total = 25000;
    const token = true;

    return (
        <BootstrapNavbar bg="dark" variant="dark" className="sticky-top">
            <Container fluid className="d-flex justify-content-between">
                <BootstrapNavbar.Brand>Pizzería Mamma Mia!</BootstrapNavbar.Brand>
                <Nav>
                    <Button variant="outline-light" className="me-2">🍕 Home</Button>
                    {token ? (
                        <>
                            <Button variant="outline-light" className="me-2">🔐 Login</Button>
                            <Button variant="outline-light">🔐 Register</Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outline-light" className="me-2">🔒 Logout</Button>
                            <Button variant="outline-light">🔓 Profile</Button>
                        </>
                    )}
                </Nav>
                <Button variant="outline-info">🛒 Total ${formatCurr(total)}</Button>
            </Container>
        </BootstrapNavbar>
    );
}

export default NavBar;
