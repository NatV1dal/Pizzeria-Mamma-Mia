import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pizza() {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      const url = "http://localhost:5000/api/pizzas/p001"; // ID fijo p001
      const response = await fetch(url)
      const data = await response.json()
      setPizza(data)
    };

    fetchPizza()
  }, [])

  if (!pizza) {
    return <p>Cargando información de la pizza...</p>
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "20rem" }} className="shadow-sm">
        <Card.Img variant="top" src={pizza.img} alt={`Imagen de ${pizza.name}`} />
        <Card.Body>
          <Card.Title className="fw-bold">Pizza {pizza.name}</Card.Title>
          <hr className="pizza-divider" />
          <Card.Subtitle className="mb-2 mt-4 text-muted text-center">Ingredientes:</Card.Subtitle>
          <Card.Text className="mb-4 text-center fs-6">
            <ul className="list-unstyled pizza-ingredients">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="pizza-ingredient">
                  🍕 {ingredient}
                </li>
              ))}
            </ul>
          </Card.Text>
          <hr className="pizza-divider" />
          <Card.Text className="pizza-price">
            <strong>Precio: </strong>${pizza.price.toLocaleString("es-CL")}
          </Card.Text>
          <Card.Text className="pizza-desc">{pizza.desc}</Card.Text>
          <Button variant="dark" className="pizza-button w-100">
          🛒 Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pizza;
