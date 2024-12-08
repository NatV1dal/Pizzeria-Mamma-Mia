import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

function Home() {
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
