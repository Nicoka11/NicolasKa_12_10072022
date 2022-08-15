/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@src/styles/index.css";
import "@src/styles/css-reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
