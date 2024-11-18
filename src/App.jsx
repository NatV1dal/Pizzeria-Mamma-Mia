
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <div>
    <NavBar></NavBar>
     <Home></Home>
     <Footer></Footer>
    </div>

     
     
    </>
  )
}

export default App
