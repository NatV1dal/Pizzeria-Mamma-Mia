import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const PizzasContext = createContext();

// Proveedor del contexto
export const PizzasProvider = ({ children }) => { // Asegúrate de usar children aquí
    const [pizzas, setPizzas] = useState([]);

    // Función para obtener pizzas de la API
    useEffect(() => {
        const fetchPizzas = async () => {
          try {
            const response = await fetch("http://localhost:5001/api/pizzas");
            const data = await response.json();
            console.log("Pizzas obtenidas desde la API:", data); // Verifica los datos cargados
            setPizzas(data);
          } catch (error) {
            console.error("Error al obtener las pizzas:", error);
          }
        };
      
        fetchPizzas();
      }, []);

      // Función para convertir texto a tipo titulo
  function TxtTipoTitulo(str) {
    return str
      .split(" ") // Divide el texto en palabras
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza la primera letra y convierte el resto en minúsculas
      .join(" "); // Une las palabras en un solo string
  }
      

    // Función para obtener una pizza específica por ID
    const getPizzaById = (id) => {
        console.log("Buscando pizza con ID:", id); // Verifica el ID recibido
        return pizzas.find((pizza) => pizza.id === id); // Busca la pizza por ID
      };

    return (
        <PizzasContext.Provider value={{ pizzas, getPizzaById, TxtTipoTitulo }}>
            {children}
        </PizzasContext.Provider>
    );
};
