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
                const response = await fetch("http://localhost:5001/api/pizzas"); // URL de la API
                const data = await response.json();
                setPizzas(data);
            } catch (error) {
                console.error("Error al obtener las pizzas:", error);
            }
        };

        fetchPizzas();
    }, []);

    // Función para obtener una pizza específica por ID
    const getPizzaById = (id) => {
        return pizzas.find((pizza) => pizza.id === id);
    };

    return (
        <PizzasContext.Provider value={{ pizzas, getPizzaById }}>
            {children}
        </PizzasContext.Provider>
    );
};
