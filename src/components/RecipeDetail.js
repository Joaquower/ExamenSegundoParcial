import React from "react";
import { useNavigate } from "react-router-dom";
import IngredientList from "./IngredientList";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function RecipeDetail({ detail }) {
  const navigate = useNavigate();
  const [removed, setRemoved] = useLocalStorage(`removed-ingredients-${detail?.idMeal}`, []);
  
  if (!detail) return null;

  // Extrae ingredientes y medidas
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = detail[`strIngredient${i}`];
    const measure = detail[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push(`${ing} ${measure ? `- ${measure}` : ""}`);
    }
  }

  const handleRemove = idx => {
    setRemoved([...removed, idx]);
  };

  return (
    <div className="recipe-detail">
      <button 
        onClick={() => navigate('/')} 
        className="back-button"
      >
        ← Back to recipes
      </button>
      <img src={detail.strMealThumb} alt={detail.strMeal} />
      <h2>{detail.strMeal}</h2>
      <p><b>Category:</b> {detail.strCategory}</p>
      <p><b>Instructions:</b> {detail.strInstructions}</p>
      <h3>Ingredients</h3>
      <IngredientList ingredients={ingredients} removed={removed} onRemove={handleRemove} />
      {detail.strYoutube && (
        <a href={detail.strYoutube} target="_blank" rel="noopener noreferrer">YouTube</a>
      )}
      {detail.strSource && (
        <a href={detail.strSource} target="_blank" rel="noopener noreferrer">Website</a>
      )}
    </div>
  );
}