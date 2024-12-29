
import Header from "./Header";
import CardPizza from "./CardPizza";
import { useState, useEffect } from "react";

function Home() {

  //guardar las pizzas
  const [pizzas, setPizzas] = useState([])

  // llamar appi desde el componente
  useEffect (() => {
  const consultarPizzas = async () => {
    const url = "http://localhost:5000/api/pizzas"; // endpoint pizzas
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
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  export default Home;
