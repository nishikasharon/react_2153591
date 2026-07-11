import { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import { assetPath } from "../utils/assetPath";

function FavouriteList() {
  const { favourites, removeFavourite, clearFavourites, addFavourite } =
    useContext(FavouriteContext);

  function dropHandler(e) {
    e.preventDefault();

    const data = e.dataTransfer.getData("property");

    if (!data) return; // nothing valid was dropped here, ignore it

    try {
      const property = JSON.parse(data);
      addFavourite(property);
    } catch (error) {
      console.error("Invalid drop data:", error);
    }
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div className="favourites" onDrop={dropHandler} onDragOver={allowDrop}>
      <h2>Favourite Properties</h2>
      <p>Drag properties here</p>

      {favourites.map((property) => (
        <div
          key={property.id}
          className="favourite-item"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("remove", property.id);
          }}
        >
          <img src={assetPath(property.images[0])} alt="" />
          <div>
            <strong>{property.location}</strong>
            <p>£{property.price.toLocaleString()}</p>
            <button onClick={() => removeFavourite(property.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <button onClick={clearFavourites}>Clear All</button>
    </div>
  );
}

export default FavouriteList;