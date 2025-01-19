import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza({ name, price, ingredients, img, onAgregarCarro}) {
    return (
        <Card style={{ width: '20rem', marginBottom: '20px' }} className="shadow-sm">
            <Card.Img variant="top" src={img} alt={`Imagen de ${name}`} />
            <Card.Body>
                <div className="fw-bold fs-5">Pizza {name}</div>
                <hr />
                <Card.Subtitle className="mb-2 mt-4 text-muted text-start">Ingredientes:</Card.Subtitle>
                <div className="mb-4 text-start fs-6">
                <ul className="list-unstyled">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="ingredient">
                                🍕 {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div className="mb-4 mt-2 text-start fs-5 fw-bold">
                    <strong>Precio: </strong>${price.toLocaleString('es-CL')}
                </div>
                <div className="d-flex justify-content-between">
                    <Button variant="outline-dark">Ver más 👀</Button>
                    <Button variant="dark" onClick={onAgregarCarro}>Añadir 🛒 </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardPizza;
