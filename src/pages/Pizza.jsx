import { PizzasContext } from "../context/PizzasContext";
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pizza() {
  const { id } = useParams(); 
  const { getPizzaById } = useContext(PizzasContext); 
  const pizza = getPizzaById(id);

  if (!pizza) {
    return <h2 className="text-center mt-5">Pizza no encontrada 🍕</h2>;
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center">{pizza.name}</h1>
      <div className="row justify-content-center">
        <img src={pizza.img} alt={pizza.name} className="img-fluid col-md-6" />
        <div className="col-md-6">
          <h3>Ingredientes:</h3>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Precio: ${pizza.price.toLocaleString("es-CL")}</h3>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
