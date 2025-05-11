import { useEffect, useState } from "react";

export default function useRecipes(category) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (!category) return;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.json())
      .then(data => setRecipes(data.meals || []));
  }, [category]);
  return recipes;
} 