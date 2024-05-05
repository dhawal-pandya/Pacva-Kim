"use client";

import React, { useState } from "react";
import Dish from "./Components/Dish";
import NewDishButton from "./Components/NewDishButton";

const App = () => {
  const [dishes, setDishes] = useState([]);

  const handleNewDish = (newDish) => {
    setDishes([...dishes, { name: newDish }]);
  };

  return (
    <div className="container mx-auto mt-8">
      <Dish dishes={dishes} />
      <NewDishButton onClick={handleNewDish} />
    </div>
  );
};

export default App;
