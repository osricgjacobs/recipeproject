import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Replace 'recipeproject' with the exact name of your GitHub repository 
// if it is different. I'll use 'recipeproject' as confirmed previously.
const repoName = 'recipeproject'; 

export default defineConfig({
  // CRITICAL FIX: The base path must match the repository name (the sub-directory)
  // where the site is hosted on GitHub Pages.
  base: `/${repoName}/`, 
  
  plugins: [react()],
});