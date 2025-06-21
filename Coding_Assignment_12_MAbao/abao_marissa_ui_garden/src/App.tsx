// Name: Marissa Abao
// Submission Date: June 30, 2025
// Class: WEBD-3012
// Coding Assignment 12: Web Component Library
// Filename: App.tsx
// Description: This file serves as the entry point for the production app view. It imports and displays sample components from the UI library.

import React from "react";
import "./App.css";
import { Button } from "./components/Button/Component_button";
import { Card } from "./components/Card/Component_card";

function App() {
  return (
    <div className="App">
      <h1>Marissa’s UI Garden 🌿</h1>
      <Button label="Click Me" />
      <Card title="Sample Card" content="This is a card preview." />
    </div>
  );
}

export default App;
