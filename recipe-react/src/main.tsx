import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import your main application component

// 1. Find the container element in the HTML
const container = document.getElementById("root");

// Check if the container exists before attempting to mount
if (container) {
  // 2. Create the React root instance
  const root = createRoot(container);

  // 3. Render the main App component into the root
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
