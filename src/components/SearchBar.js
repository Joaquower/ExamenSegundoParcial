import React from "react";
import "../styles/searchbar.css";

export default function SearchBar({ value, onChange, placeholder = "Search recipes and more..." }) {
  return (
    <div className="searchbar">
      <span className="searchbar-icon" aria-hidden="true">🔍</span>
      <input
        type="text"
        className="searchbar-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
} 