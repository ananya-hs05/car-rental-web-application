import React from "react";

const cars = [
  { id: 1, name: "Toyota Camry", price: 50 },
  { id: 2, name: "Honda Accord", price: 60 },
  { id: 3, name: "BMW 3 Series", price: 100 },
];

function App() {
  let selectedCar = null;

  return (
    <div>
      <h1>Car Rental</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.name} - ${car.price}
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>

      {}
      <button>Checkout</button>
    </div>
  );
  const cars = [
    { id: 1, name: "Toyota Camry", price: 50 },
    { id: 2, name: "Honda Accord", price: 60 },
    { id: 3, name: "BMW 3 Series", price: 100 },
  ];
}
{
    <button>Checkout</button>
}
export default App;
