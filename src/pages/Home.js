import React, { useState, useEffect, useRef } from "react";
import useCategories from "../hooks/useCategories";
import useRecipes from "../hooks/useRecipes";
import Header from "../components/Header";
import CategoryList from "../components/CategoryList";
import RecipeGrid from "../components/RecipeGrid";
import SortControl from "../components/SortControl";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const categories = useCategories();
  const [selected, setSelected] = useState("Beef");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [showMobileBar, setShowMobileBar] = useState(false);
  const [hideMobileBar, setHideMobileBar] = useState(false);
  const barRef = useRef(null);
  let recipes = useRecipes(selected);

  // Filtrar recetas por búsqueda
  if (search.trim()) {
    recipes = recipes.filter(r =>
      r.strMeal.toLowerCase().includes(search.trim().toLowerCase())
    );
  }

  // Ordenar recetas
  recipes = [...recipes].sort((a, b) =>
    order === "asc"
      ? a.strMeal.localeCompare(b.strMeal)
      : b.strMeal.localeCompare(a.strMeal)
  );

  // Mostrar barra fija solo después de pasar las categorías
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 600) return;
      const sidebar = document.querySelector('.sidebar');
      if (!sidebar) return;
      const sidebarBottom = sidebar.getBoundingClientRect().bottom;
      setShowMobileBar(sidebarBottom <= 0);
      setHideMobileBar(window.scrollY > 320); // Ajusta este valor según el largo de la página
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <CategoryList
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
        {/* Buscador y sort-control en el flujo normal (mobile), solo visible cuando no está fixed */}
        <div className={`searchbar-mobile-normal${showMobileBar ? " hide" : ""}`}>
          <SearchBar value={search} onChange={setSearch} />
          <SortControl order={order} setOrder={setOrder} />
        </div>
        {/* Buscador Desktop y sort-control solo en desktop */}
        <div className="recipes-section">
          <div className="searchbar-desktop">
            <SearchBar value={search} onChange={setSearch} />
            <SortControl order={order} setOrder={setOrder} />
          </div>
          <RecipeGrid recipes={recipes} />
        </div>
      </div>
      {/* Buscador y sort-control fixed en mobile, debajo de categorías */}
      <div
        ref={barRef}
        className={`searchbar-mobile-fixed${showMobileBar ? " show" : ""}${hideMobileBar ? " hide" : ""}`}
      >
        <SearchBar value={search} onChange={setSearch} />
        <SortControl order={order} setOrder={setOrder} />
      </div>
    </div>
  );
} 