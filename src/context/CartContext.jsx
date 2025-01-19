import { createContext, useState } from "react";
import { pizzaCart } from "../data/pizzas";

//crear el contexto
export const CartContext = createContext();

// proveerlo
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(pizzaCart);

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


  return (
    <CartContext.Provider
      value={{ cart, SumaPizza, RestaPizza, getTotal, setCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;