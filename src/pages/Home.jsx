import { CartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import Header from "../components/Header"
import CardPizza from "./CardPizza";

function Home() {

  //guardar las pizzas
  const [pizzas, setPizzas] = useState([])

  // consumir el contexto
  const { AgregarCarro } = useContext(CartContext);

  // llamar appi desde el componente
  useEffect (() => {
  const consultarPizzas = async () => {
    const url = "http://localhost:5001/api/pizzas"; // endpoint pizzas
    const response = await fetch(url)
    const data = await response.json()
    console.log("pizzas obtenidas: ", data)
    setPizzas(data) // guarda la info en el estado
  };

  consultarPizzas()
  }, [])


    return (
      <>
        <Header />
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="col-md-4 col-12 mb-3">
                <CardPizza
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  onAgregarCarro={() => AgregarCarro(pizza)}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
