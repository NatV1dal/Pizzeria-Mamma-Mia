import { useContext } from "react";
import { PizzasContext } from "../context/PizzasContext";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header"
import CardPizza from "./CardPizza";

function Home() {

  const { pizzas } = useContext(PizzasContext);
  const { AgregarCarro } = useContext(CartContext);

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
