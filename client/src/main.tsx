import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerServiceWorker } from "./registerSW";

// Entry point for the application
createRoot(document.getElementById("root")!).render(<App />);

// Registrar Service Worker para cache
registerServiceWorker();
