import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Router } from "wouter";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
