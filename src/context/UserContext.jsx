import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Estado inicial del token en localStorage
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem("token");
        return token === "TokenSimulado123"; // Verifica si el token en localStorage es válido
    });

    // Sincronizar el estado del token con localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem("token", "TokenSimulado123"); // Guarda el token en localStorage
        } else {
            localStorage.removeItem("token"); // Elimina el token de localStorage
        }
    }, [user]);

     // iniciar Token en true
     useEffect(() => {
        localStorage.setItem("token", "TokenSimulado123");
    }, []);

    // Método para cerrar sesión
    const logout = () => {
        setUser(false); // token a false
        console.log("token eliminado");
    };

    return (
        <UserContext.Provider value={{ user, logout }}>
            {children}
        </UserContext.Provider>
    );
};
