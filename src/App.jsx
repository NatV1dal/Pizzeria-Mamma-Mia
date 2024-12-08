
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer'
//import Register from './components/Register';
//import Login from './components/Login';


function App() {
  
  return (
    <>
    <div>
    <NavBar />
    <Home />
     {/* <Register /> */}
   {/*  <Login />  */}
   
     <Footer />
    </div>

     
     
    </>
  )
}

export default App
