import { Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";

import PropertyPage from "./pages/PropertyPage";

import { FavouriteProvider } from "./context/FavouriteContext";

function App() {
  return (
    <FavouriteProvider>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </FavouriteProvider>
  );
}

export default App;