import React from "react";

export default function IngredientList({ ingredients, removed, onRemove }) {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ing, idx) =>
        !removed.includes(idx) ? (
          <li key={idx}>
            {ing}
            <button onClick={() => onRemove(idx)}>Remove</button>
          </li>
        ) : null
      )}
    </ul>
  );
} 