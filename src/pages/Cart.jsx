import { CartContext} from '../context/CartContext';
import React, {useContext} from 'react';

function Cart() {
  const { cart, SumaPizza, RestaPizza, getTotal } = useContext(CartContext);

  
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="container col-md-6">
        <h2 className="text-start mb-4 fw-bold">Detalles del pedido:</h2>
        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center justify-content-between mb-3"
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '5px',
                marginRight: '15px',
              }}
            />
            <div style={{ flex: 1 }}>
              <h5>{item.name}</h5>
            </div>
            <div className="me-4 align-items-center fw-bold">
              <p>${item.price.toLocaleString('es-CL')}</p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => RestaPizza(item.id)}
              >
                -
              </button>

              <span className="mx-2">{item.count}</span>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => SumaPizza(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="text-start mt-5 fw-bold">
          <h2>Total: ${getTotal().toLocaleString('es-CL')}</h2>
        </div>

        <div className="text-start mt-3">
          <button className="btn btn-dark">Pagar</button>
        </div>
      </div>
    </div>
  );
}

export default Cart