import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles.css";

import { BrowserRouter } from "react-router-dom";

import { FavouriteProvider } from "./context/FavouriteContext";

ReactDOM.createRoot(document.getElementById("root")).render(

<React.StrictMode>

<BrowserRouter>

<FavouriteProvider>

<App />

</FavouriteProvider>

</BrowserRouter>

</React.StrictMode>

);