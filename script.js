"Use strict";
function search() {

  // 1. Get the input field and all the recipe cards
  const searchInput = document.getElementById('recipe-search');
  const recipeCards = document.querySelectorAll('.recipe-card');

  // 2. Attach the filtering function to the 'input' event 
  //    (This makes the search happen live as the user types)
  searchInput.addEventListener('input', filterRecipes);

  // Optional: Attach the same function to the button click
  document.getElementById('search-button').addEventListener('click', filterRecipes);

  // Function to perform the filtering
  function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    recipeCards.forEach(card => {
      const title = card.querySelector('h2');
      const titleText = title.textContent.toLowerCase();
      if (titleText.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
    );
  }
}