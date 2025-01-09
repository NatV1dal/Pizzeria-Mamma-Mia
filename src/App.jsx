
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
//import Home from './pages/Home'
import Footer from './components/Footer'
//import Register from './pages/Register';
//import Login from './pages/Login';
//import Cart from './pages/Cart';
import Pizza from './pages/Pizza';


function App() {
  
  return (
    <>
    <div>
    <NavBar />
    {/*<Home /> */}
     {/* <Register /> */}
   {/*  <Login />  */}
     {/* <Cart/> */}
     <Pizza />
     <Footer />
    </div>

     
     
    </>
  )
}

export default App
