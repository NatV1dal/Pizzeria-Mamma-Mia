export const pizzas = async () => {
  const url = "http://localhost:5001/api/pizzas"
    const response = await fetch(url)
    const data = await response.json()
    return data;
  };