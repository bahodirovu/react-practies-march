import React from "react";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <div className="text">
        <h1>{title}</h1>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>{calories}</p>
      </div>
      <div className="img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default Recipe;
