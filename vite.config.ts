import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The repository name must be correct
const repoName = 'recipeproject'; 

export default defineConfig({
  // CRITICAL: This prepends the repo name to all asset links in index.html
  base: `/${repoName}/`, 
  
  plugins: [react()],
});