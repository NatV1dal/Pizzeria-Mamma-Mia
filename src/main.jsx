import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext';
import { PizzasProvider } from './context/PizzasContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <PizzasProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </PizzasProvider>
    </UserProvider>
  </StrictMode>
);