import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import { HashRouter } from "react-router-dom";
import { FavouriteProvider } from "./context/FavouriteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <FavouriteProvider>
        <App />
      </FavouriteProvider>
    </HashRouter>
  </React.StrictMode>
);