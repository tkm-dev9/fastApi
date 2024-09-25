import App from "./components/App";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./reset.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
