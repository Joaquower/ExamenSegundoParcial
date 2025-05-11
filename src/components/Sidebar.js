import React from 'react';
import './Sidebar.css';

function Sidebar({ categories, selected, onSelect }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul className="sidebar-list">
        {categories.map((cat) => (
          <li
            key={cat.idCategory}
            className={`sidebar-item${selected === cat.strCategory ? ' selected' : ''}`}
            onClick={() => onSelect(cat.strCategory)}
          >
            <img src={cat.strCategoryThumb} alt={cat.strCategory} className="sidebar-icon" />
            <span>{cat.strCategory}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar; 