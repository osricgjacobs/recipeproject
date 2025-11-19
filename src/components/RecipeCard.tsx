import React from "react";
// Assuming RecipeData is correctly imported from its relative path
import type { RecipeData } from "./RecipeData";
// 1. FIX: Import the module styles object from the .module.css file
import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  recipe: RecipeData;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    // 2. FIX: Replace string class names with module object references (styles.className)
    <article className={styles.recipeCard} id={recipe.id}>
      <h2>{recipe.title}</h2>
      <img src="" alt={`Prent van ${recipe.title}`} />

      <section className={styles.ingredients}>
        <h3>Bestandele:</h3>
        <ul>
          {/* Map the ingredients array to <li> elements */}
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </section>

      <section className={styles.instructions}>
        <h3>Metode:</h3>
        <ol>
          {/* Map the method array to <li> elements */}
          {recipe.method.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
};

export default RecipeCard;
