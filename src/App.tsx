import React, { useState, useMemo } from "react";
import RecipeCard from "./components/RecipeCard";
// NOTE: Assuming RecipeData file exports both ALL_RECIPES_DATA and the RecipeData type
import { ALL_RECIPES_DATA } from "./components/RecipeData";
import type { RecipeData } from "./components/RecipeData";
import { sortRecipesAlphabetically } from "./components/SortFunction";

// Define the Category type based on what you put in your data file
type RecipeCategory = "All" | "Sweet" | "Savoury";

const App: React.FC = () => {
  // Existing state for search term
  const [searchTerm, setSearchTerm] = useState("");

  // NEW State for category filter, defaulting to 'All'
  const [categoryFilter, setCategoryFilter] = useState<RecipeCategory>("All");

  // 1. Sorting and Filtering Logic is handled on the data array
  const displayedRecipes = useMemo(() => {
    // Start with the full data
    let recipes = [...ALL_RECIPES_DATA];

    // 1a. Sorting (Run first to maintain alphabetical order across categories)
    recipes = sortRecipesAlphabetically(recipes);

    // 1b. Filtering by Category (NEW)
    if (categoryFilter !== "All") {
      recipes = recipes.filter(
        (recipe: RecipeData) => recipe.category === categoryFilter
      );
    }

    // 1c. Filtering by Search Term (Existing)
    if (searchTerm) {
      recipes = recipes.filter((recipe: RecipeData) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return recipes;

    // Recalculate when search term OR categoryFilter changes
  }, [searchTerm, categoryFilter]);

  return (
    <>
      <article className="title">
        <h1>Resepte van Dawn</h1>
      </article>

      {/* The search input handles the state change */}
      <div className="search-area">
        <input
          type="text"
          id="recipe-search"
          placeholder="Soek vir 'n resep..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update state on input
        />
        <button id="search-button">Soek</button>
      </div>

      {/* --- CATEGORY FILTER BUTTONS (NEW UI) --- */}
      <div className="filter-controls">
        <button
          onClick={() => setCategoryFilter("All")}
          className={categoryFilter === "All" ? "active-filter" : ""}
        >
          Alle Resepte
        </button>
        <button
          onClick={() => setCategoryFilter("Sweet")}
          className={categoryFilter === "Sweet" ? "active-filter" : ""}
        >
          Soet / Nagereg
        </button>
        <button
          onClick={() => setCategoryFilter("Savoury")}
          className={categoryFilter === "Savoury" ? "active-filter" : ""}
        >
          Sout / Hoofgereg
        </button>
      </div>

      <div className="recipes-container">
        {/* Map the filtered array to render the individual components */}
        {displayedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <footer>
        <p>{"Ontwikkel deur Osric Jacobs - 2025"}</p>
        <p>{"Alle resepte is verskap deur Veronica Jacobs"}</p>
      </footer>
    </>
  );
};

export default App;
