import React from "react";
import { Container } from "react-bootstrap";
import "../style/Header.css";


function Header() {
    return (
        <div className="header-background">
            <Container className="text-center text-light d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="fs-1">¡Pizzería Mamma Mia!</h1>
                <p className="fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
                <hr className="linea-hr"/>
            </Container>
        </div>
    );
}

export default Header;
