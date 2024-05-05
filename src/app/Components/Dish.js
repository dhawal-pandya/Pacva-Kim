import React from "react";

const Dish = ({ dishes }) => {
  return (
    <div>
      {dishes.map((dish, index) => (
        <div key={index}>
          <h2>{dish.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Dish;
