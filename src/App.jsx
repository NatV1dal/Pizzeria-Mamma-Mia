import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import { PizzasProvider } from './context/PizzasContext';


function App() {
  
  return (
    <>
    <PizzasProvider>
      <CartProvider>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <main className='flex-grow-1'>
            <Container>
              <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/pizza/:id" element={<Pizza />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </Container>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </PizzasProvider>
    </>
  )
}

export default App
