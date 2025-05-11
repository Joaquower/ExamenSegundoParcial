import React from "react";

export default function SortControl({ order, setOrder }) {
  return (
    <div className="sort-control">
      <label>Sort by:</label>
      <select value={order} onChange={e => setOrder(e.target.value)}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
} 