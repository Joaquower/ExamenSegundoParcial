import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
} 