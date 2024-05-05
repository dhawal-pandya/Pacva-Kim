import React from "react";

const possibleDishes = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];

const NewDishButton = ({ onClick }) => {
  const handleNewDish = () => {
    const randomIndex = Math.floor(Math.random() * possibleDishes.length);
    const randomDish = possibleDishes[randomIndex];
    onClick(randomDish);
  };

  return (
    <button
      className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
      onClick={handleNewDish}
    >
      New Dish
    </button>
  );
};

export default NewDishButton;
