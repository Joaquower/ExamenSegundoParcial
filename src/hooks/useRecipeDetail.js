import { useEffect, useState } from "react";

export default function useRecipeDetail(id) {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    if (!id) return;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setDetail(data.meals ? data.meals[0] : null));
  }, [id]);
  return detail;
} 