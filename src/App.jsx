
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
//import Home from './pages/Home'
import Footer from './components/Footer'
//import Register from './components/Register';
//import Login from './components/Login';
//import Cart from './components/Cart';
import Pizza from './data/Pizza';


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
