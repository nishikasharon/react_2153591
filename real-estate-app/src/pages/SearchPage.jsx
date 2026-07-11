import { useState, useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import PropertyCard from "../components/PropertyCard";
import FavouriteButton from "../components/FavouriteButton";
import FavouriteList from "../components/FavouriteList";
import RemoveFavouriteZone from "../components/RemoveFavouriteZone";
import propertiesData from "../data/properties.json";

function SearchPage() {
  const { favourites } = useContext(FavouriteContext);

  const [type, setType] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [postcode, setPostcode] = useState("");

  const properties = propertiesData.properties;

  const filteredProperties = properties.filter((property) => {
    if (type !== "any" && property.type !== type) return false;
    if (minPrice && property.price < Number(minPrice)) return false;
    if (maxPrice && property.price > Number(maxPrice)) return false;
    if (minBedrooms && property.bedrooms < Number(minBedrooms)) return false;
    if (
      postcode &&
      !property.postcode.toLowerCase().includes(postcode.toLowerCase())
    )
      return false;
    return true;
  });

  function resetSearch() {
    setType("any");
    setMinPrice("");
    setMaxPrice("");
    setMinBedrooms("");
    setPostcode("");
  }

  return (
    <div className="search-page">
      <h1>Search Properties</h1>

      <div className="search-form">
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="any">Any</option>
            <option value="house">House</option>
            <option value="flat">Flat</option>
          </select>
        </label>

        <label>
          Min Price
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>

        <label>
          Max Price
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>

        <label>
          Min Bedrooms
          <input
            type="number"
            value={minBedrooms}
            onChange={(e) => setMinBedrooms(e.target.value)}
          />
        </label>

        <label>
          Postcode
          <input
            type="text"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </label>

        <button onClick={resetSearch}>Reset</button>
      </div>

      <div className="search-results-layout">
        <div className="property-grid">
          {filteredProperties.length === 0 && (
            <p>No properties match your search.</p>
          )}

          {filteredProperties.map((property) => (
            <div className="property-grid-item" key={property.id}>
              <PropertyCard property={property} />
              <FavouriteButton property={property} />
            </div>
          ))}
        </div>

        <aside>
          <h2>Favourites ({favourites.length})</h2>
          <FavouriteList />
          <RemoveFavouriteZone />
        </aside>
      </div>
    </div>
  );
}

export default SearchPage;