import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function NotFound() {
    return (
        <Container className="text-center my-5">
            <Row className="justify-content-center">
                <Col md={12}>
                    <h3 className="display-5 fw-bold">¡Oops! Esta página no existe...</h3>
                    <img
                        src="/img/PizzaTriste.png"
                        alt="Error 404"
                        className="img-fluid rounded mb-5"
                        style={{ width: '300px', height: 'auto' }}
                    />
                    <div>
                        <Link to="/">
                            <Button variant="dark" size="lg">
                                Volver al inicio
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;
