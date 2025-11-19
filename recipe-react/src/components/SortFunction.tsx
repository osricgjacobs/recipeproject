import type { RecipeData } from "./RecipeData"; // Import the RecipeData interface

export const sortRecipesAlphabetically = (
  recipesArray: RecipeData[]
): RecipeData[] => {
  // We create a shallow copy of the array before sorting. This is best practice
  // in React to avoid mutating the original data source.
  const sortableArray = [...recipesArray];

  sortableArray.sort((a, b) => {
    // 1. Get the titles and convert them to lowercase and trim any whitespace
    const titleA = a.title.trim().toLowerCase();
    const titleB = b.title.trim().toLowerCase();

    // 2. Perform string comparison
    if (titleA < titleB) {
      return -1; // a comes before b
    }
    if (titleA > titleB) {
      return 1; // b comes after a
    }
    return 0; // titles are equal
  });

  return sortableArray;
};
