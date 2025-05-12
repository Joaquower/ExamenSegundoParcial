import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faYoutube, faGlobe, faTrash } from "@fortawesome/free-solid-svg-icons";
import IngredientList from "./IngredientList";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function RecipeDetail({ detail }) {
  const navigate = useNavigate();
  const [removed, setRemoved] = useLocalStorage(`removed-ingredients-${detail?.idMeal}`, []);
  
  if (!detail) return null;

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = detail[`strIngredient${i}`];
    const measure = detail[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push(`${measure ? `${measure} ` : ""}${ing}`);
    }
  }

  const handleRemove = idx => {
    setRemoved([...removed, idx]);
  };

  return (
    <div className="recipe-detail">
      <button onClick={() => navigate('/')} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      
      <div className="recipe-detail-header">
        <img src={detail.strMealThumb} alt={detail.strMeal} />
        <div className="recipe-detail-info">
          <h1>{detail.strMeal}</h1>
          <div className="recipe-meta">
            <span className="recipe-category">Category: {detail.strCategory}</span>
            <span className="recipe-area">Origin: {detail.strArea}</span>
          </div>
          <div className="recipe-links">
            {detail.strYoutube && (
              <a href={detail.strYoutube} target="_blank" rel="noopener noreferrer" className="recipe-link youtube">
                <FontAwesomeIcon icon={faYoutube} /> Watch on YouTube
              </a>
            )}
            {detail.strSource && (
              <a href={detail.strSource} target="_blank" rel="noopener noreferrer" className="recipe-link website">
                <FontAwesomeIcon icon={faGlobe} /> View Source
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="recipe-section">
          <h2>Instructions</h2>
          <p className="recipe-instructions">{detail.strInstructions}</p>
        </div>

        <div className="recipe-section">
          <h2>Ingredients</h2>
          <div className="ingredients-container">
            {ingredients.map((ing, idx) => 
              !removed.includes(idx) ? (
                <div key={idx} className="ingredient-item">
                  <span>{ing}</span>
                  <button onClick={() => handleRemove(idx)} className="remove-ingredient">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}