import React, { useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

function Profile() {

    const { logout, user } = useContext(UserContext);

    // Si el usuario no está autenticado, redirige al login
    if (!user) {
        return <Navigate to="/login" />;
    }

  
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <h1 className="mb-4">Profile</h1>
                    <h2 className="mb-4">Email: administrador@pmammamia.com</h2>
                    <Button
                        variant="danger"
                        size="lg"
                        onClick={logout} // Llama a logout al hacer clic
                    >
                        Cerrar sesión
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
