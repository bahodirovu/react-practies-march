import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const YOUR_APP_ID = "ba550e67";
  const YOUR_APP_KEY = "12936f53dd555fc05ff71c7dc7d414a4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search_form">
        <input
          type="text"
          className="search_input"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
