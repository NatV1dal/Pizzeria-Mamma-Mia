import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-3">
            <Container>
                <p className="mb-0">
                    © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
                </p>
            </Container>
        </footer>
    );
}

export default Footer;
