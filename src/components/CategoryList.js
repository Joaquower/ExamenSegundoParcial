import React from "react";

export default function CategoryList({ categories, selected, onSelect }) {
  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li
            key={cat.idCategory}
            className={selected === cat.strCategory ? "active" : ""}
            onClick={() => onSelect(cat.strCategory)}
          >
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            {cat.strCategory}
          </li>
        ))}
      </ul>
    </aside>
  );
} 