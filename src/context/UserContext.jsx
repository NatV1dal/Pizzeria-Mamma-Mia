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
            localStorage.removeItem("token"); // Elimina token de localStorage
        }
    }, [user]);

     // inicia Token en true
     useEffect(() => {
        localStorage.setItem("token", "TokenSimulado123");
    }, []);

    // Cerrar sesión
    const logout = () => {
        setUser(false);
        console.log("token eliminado");
    };


    // Metodo para registro
    const register = async (email, password) => {
        try {

            const response = await fetch ('http://localhost:5001//api/auth/register', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            } )

            if(response.ok) {
                alert('Registro Exitoso')
            } else {
                const error = await response.json();
                alert('Error al registrar', error)
            }

        } catch (error){
            console.error('Error al registrar', error);
        }
    }


    return (
        <UserContext.Provider value={{ user, logout, register }}>
            {children}
        </UserContext.Provider>
    );
};
