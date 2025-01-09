import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardPizza({ name, price, ingredients, img }) {
    return (
        <Card style={{ width: '20rem', marginBottom: '20px' }} className="shadow-sm">
            <Card.Img variant="top" src={img} alt={`Imagen de ${name}`} />
            <Card.Body>
                <div className="fw-bold">Pizza {name}</div>
                <hr />
                <Card.Subtitle className="mb-2 mt-4 text-muted text-center">Ingredientes:</Card.Subtitle>
                <Card.Text className="mb-4 text-center fs-6">
                <ul className="list-unstyled">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="ingredient">
                                🍕 {ingredient}
                            </li>
                        ))}
                    </ul>
                </Card.Text>
                <hr />
                <Card.Text className="mb-4 mt-2 text-center fs-5">
                    <strong>Precio: </strong>${price.toLocaleString('es-CL')}
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="outline-dark">Ver más 👀</Button>
                    <Button variant="dark">Añadir 🛒</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardPizza;
