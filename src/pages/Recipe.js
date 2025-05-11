import React from "react";
import { useParams } from "react-router-dom";
import useRecipeDetail from "../hooks/useRecipeDetail";
import RecipeDetail from "../components/RecipeDetail";
import Header from "../components/Header";

export default function Recipe() {
  const { id } = useParams();
  const detail = useRecipeDetail(id);

  return (
    <div className="container">
      <Header />
      <RecipeDetail detail={detail} />
    </div>
  );
} 