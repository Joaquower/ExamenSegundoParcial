import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  return (
    <div className="recipe-card" onClick={() => navigate(`/recipe/${recipe.idMeal}`)}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="recipe-title">{recipe.strMeal}</div>
    </div>
  );
} 