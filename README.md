# 👩‍🍳 Dawn's Resepte (Recipe Project)

## Project Overview

This project is an interactive, component-based web application built with **React and TypeScript** to digitally house a collection of family recipes from my mother's (Dawn's) recipe book. The focus is on providing a clean, accessible, and user-friendly interface for browsing, searching, and filtering the recipes.

## ✨ Key Features

* **Component-Based Structure:** Built with reusable React components (`App.tsx`, `RecipeCard.tsx`) for scalability and maintainability.
* **Live Filtering & Search:** Recipes are dynamically filtered by title as the user types using React state management (`useState` and `useMemo`).
* **Categorical Sorting:** Users can filter recipes based on **Sweet/Dessert** or **Savoury/Main Dish** categories.
* **Data-Centric Design:** All recipe content is stored in a structured TypeScript data file (`recipesData.ts`), separate from the UI components.
* **CSS Modules:** Styles are scoped to their respective components (e.g., `RecipeCard.module.css`) to prevent global style conflicts and enhance modularity.

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **React** | Core JavaScript library for building the user interface with components. |
| **TypeScript (TSX)** | Adds type safety and strong structure, especially for the recipe data models. |
| **CSS Modules** | Ensures styling is encapsulated and locally scoped to individual components. |
| **HTML5 / CSS3** | Semantic structure and base styling. |

## 📂 Project Structure

| File / Folder | Description |
| :--- | :--- |
| **`src/App.tsx`** | The main application component. Manages global state (search, category filter) and orchestrates the display of all components. |
| **`src/components/RecipeCard.tsx`** | A reusable component that renders a single recipe based on the `RecipeData` prop it receives. |
| **`src/recipesData.ts`** | The single source of truth for all recipe content and categories, defined using TypeScript interfaces. |
| **`src/components/RecipeCard.module.css`** | Locally scoped styles for the `RecipeCard` component. |
| **`src/App.css`** | Global styles for the `body`, `footer`, and non-component layout containers (e.g., `.search-area`). |

## 🚀 Getting Started

To set up and run this project locally, you must have **Node.js** and **npm** (or yarn) installed.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/osricgjacobs/recipeproject.git](https://github.com/osricgjacobs/recipeproject.git)
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd recipeproject
    ```
3.  **Install Dependencies:**
    ```bash
    npm install 
    # OR
    yarn install
    ```
4.  **Run the Development Server:**
    ```bash
    npm start
    # OR
    yarn start
    ```
    The application should automatically open in your browser at `http://localhost:3000` (or a similar port).

## 💡 Future Enhancements (To-Do)

* **Serving Size Adjuster:** Implement numerical calculation logic within the `RecipeCard` component to dynamically scale ingredient quantities.
* **Ingredient Toggler:** Add functionality to click/check off ingredients for a virtual shopping list.
* **Unit Conversion:** Add a feature to convert between metric and imperial units.

---

*Created by Osric Jacobs - 2025*