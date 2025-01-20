import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";
import { CartContext } from "../context/CartContext";

function Pizza() {
  const { id } = useParams(); // parámetro ID de la URL
  const { getPizzaById, TxtTipoTitulo } = useContext(PizzasContext)
  const pizza = getPizzaById(id); // pizza específica por ID
  const { AgregarCarro } = useContext(CartContext) // agrega al carrito


  if (!pizza) {
    return <h2 className="text-center mt-5">Pizza no encontrada 🍕</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        {/* Imagen de la pizza */}
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Información de la pizza */}
        <div className="col-md-6">
          <h1 className="text-start mb-4 fw-bold">Pizza {TxtTipoTitulo(pizza.name)}</h1>
          <h4 className="mb-3">Ingredientes:</h4>
          <ul className="list-unstyled mb-4">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                🍕 {ingredient}
              </li>
            ))}
          </ul>
          <p className="mt-4"><strong>Descripción: </strong>{pizza.desc}</p>
          <h3 className="fs-12 fw-bold">Precio: ${pizza.price.toLocaleString("es-CL")}</h3>
          
        <div className="mt-4 d-flex gap-3">
            <Link to="/" className="btn btn-outline-dark btn-lg">Volver al Menú 👀</Link>
            <button className="btn btn-dark btn-lg" onClick={() => AgregarCarro(pizza)}>Añadir al carrito 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;