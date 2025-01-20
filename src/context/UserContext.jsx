import { createContext, useState } from "react";

// Crear  contexto
export const UserContext = createContext();

// Proveer
export const UserProvider = ({ children }) => { 
    const [user, setUser] = useState(true); 

    // Método para cerrar sesión
    const logout = () => {
        setUser(false);
    };

    return (
        <UserContext.Provider value={{ user, logout }}>
            {children}
        </UserContext.Provider>
    );
};
