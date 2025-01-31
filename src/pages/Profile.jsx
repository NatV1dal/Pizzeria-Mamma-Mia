import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

function Profile() {

    const { logout, user, getUserProfile } = useContext(UserContext);
    const [profile, setProfile] = useState(null); // datos de perfil almacenados en el estado

    // Obtener el perfil del usuario 
    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getUserProfile();
            if (data) {
                setProfile(data);
            }
        };
        fetchProfile();
    }, [getUserProfile]);

    // Si el usuario no está autenticado, redirige al login
    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <h1 className="mb-4">Perfil</h1>
                    {profile ? (
                        <>
                            <h2 className="mb-4"><b>Email:</b> {profile.email}</h2>
                        </>
                    ) : (
                        <p>Cargando perfil...</p>
                    )}
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
