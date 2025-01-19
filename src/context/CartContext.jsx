import { createContext, useState } from "react";


//crear el contexto
export const CartContext = createContext();

// proveerlo
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

  // Función para sumar la cantidad
  const SumaPizza = (id) => {
    setCart(
      cart.map((item) => 
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    )
  }

  // Función para restar la cantidad
  const RestaPizza = (id) => {
    setCart(
      cart.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0) // Elimina la pizza si llega a 0
    )
  }


  // Calcular total
  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.count, 0);


  // Agregar producto al carrito

const AgregarCarro = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        // Incrementar la cantidad si ya existe
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      // Agregar nuevo producto al carrito
      return [...prevCart, { ...product, count: 1 }];
    });
  };


  return (
    <CartContext.Provider
      value={{ cart, SumaPizza, RestaPizza, getTotal, setCart, AgregarCarro }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;