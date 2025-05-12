import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/searchbar.css";

export default function SearchBar({ value, onChange, placeholder = "Search recipes and more..." }) {
  return (
    <div className="searchbar">
      <span className="searchbar-icon">
        <FontAwesomeIcon icon={faSearch} />
      </span>
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