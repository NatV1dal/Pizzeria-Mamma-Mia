import { CartProvider } from './context/CartContext';
import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound";
import { UserContext } from "./context/UserContext";

function App() {

  const { user } = useContext(UserContext); // Accedemos al token directamente desde el contexto

  return (
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <main className="flex-grow-1">
              <Container>
              <Routes>
                        {/* Ruta pública */}
                        <Route path="/" element={<Home />} />

                        {/* Bloquear acceso a login y register si el token es true */}
                        <Route
                            path="/login"
                            element={user ? (<Navigate to="/profile" />) : (<Login />)}
                        />
                        <Route
                            path="/register"
                            element={user ? (<Navigate to="/profile" />) : (<Register />)}
                        />

                        {/* Ruta protegida para /profile */}
                        <Route
                            path="/profile"
                            element={user ? (<Profile />) : (<Navigate to="/login" />)}
                        />

                        {/* Ruta pública */}
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/pizza/:id" element={<Pizza />} />

                        {/* Ruta no encontrada */}
                        <Route path="/*" element={<h1>404 - Página no encontrada</h1>} />
                    </Routes>
                   
              </Container>
          </main>
          <Footer />
      </div>
      </CartProvider>
  );
}
export default App;
