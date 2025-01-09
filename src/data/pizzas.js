export const pizzas = async () => {
  const url = "http://localhost:5001/api/pizzas"
    const response = await fetch(url)
    const data = await response.json()
    return data;
  };

  // pizza para carrito
  export const pizzaCart = [
    {
      desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
      id: "P001",
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      name: "napolitana",
      price: 5950,
    },
  ]