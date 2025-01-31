import React, { createContext, useState, useEffect } from "react";
import { children } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        return token && email ? { token, email } : null; // Si existe token y email, los almacena
      });

    // Sincronizar el estado del token con localStorage
    useEffect(() => {
        if (user) {
          localStorage.setItem("token", user.token); // Guarda el token en localStorage
          localStorage.setItem("email", user.email); // Guarda el email en localStorage
        } else {
            localStorage.removeItem("token"); // Elimina token de localStorage
            localStorage.removeItem("email"); // Elimina token de localStorage
        }
    }, [user]);


    // Cerrar sesión
    const logout = () => {
        setUser(false);
        console.log("Sesión cerrada, se elimina token");
    };

    // Método para registrar un usuario
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser({ token: data.token, email: data.email });
        localStorage.setItem("token", data.token); // Guarda el token en localStorage
        localStorage.setItem("email", data.email);  // Guarda el email en localStorage
        console.log("Registro exitoso:", data);
      } else {
        const error = await response.json();
        throw new Error(error.error || "Error desconocido al registrar");
      }
    } catch (error) {
      console.error("Error en registro:", error.message);
      throw error; // Reenvía el error al frontend
    }
  };

    // metodo para login

    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                    })
                    if (response.ok) {
                        const data = await response.json();
                        setUser({token:data.token, email: data.email});
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("email", data.email);
                        alert("¡Bienvenido!")
                        } else {
                            const error = await response.json();
                            alert("Error al iniciar sesión: " + (error.message || "Error desconocido"));
                            }
            } catch (error){
                console.error('Error al iniciar sesión', error);
                }
        };

        //metodo para obtener el perfil de usuario autentificado
        const getUserProfile = async () => { 
          try {
              if (!user?.token) {
                  console.warn("Usuario no autenticado");
                  return null;
              }
              const response = await fetch("http://localhost:5001/api/auth/me", {
                  method: "GET",
                  headers: {
                      Authorization: `Bearer ${user.token}`,
                      "Content-Type": "application/json",
                  },
              });
              if (response.ok) {
                  const profileData = await response.json();
                  console.log("Perfil del usuario:", profileData);
                  return profileData;
              } else {
                  console.error("Error al obtener perfil del usuario");
                  return null;
              }
          } catch (error) {
              console.error("Error en getUserProfile:", error);
              return null;
          }
      };

    return (
        <UserContext.Provider value={{ user, logout, register, login, getUserProfile }}> 
            {children}
        </UserContext.Provider>
    );
};
