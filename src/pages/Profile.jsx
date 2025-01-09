import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Profile() {
  
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <h1 className="mb-4">Profile </h1>
                    <h2 className="mb-4" > Email: administrador@pmammamia.com</h2>
                    <Button variant="danger" size="lg">Cerrar sesión</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
