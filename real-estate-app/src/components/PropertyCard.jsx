import { Link } from "react-router-dom";
import { FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { assetPath } from "../utils/assetPath";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img
        src={assetPath(property.images[0])}
        alt={property.shortDescription}
      />

      <h3>{property.location}</h3>

      <p>
        <FaMapMarkerAlt />
        {property.postcode}
      </p>

      <p>
        <FaBed />
        {property.bedrooms} Bedrooms
      </p>

      <p>{property.shortDescription}</p>

      <h2>£{property.price.toLocaleString()}</h2>

      <Link to={`/property/${property.id}`}>View Details</Link>
    </div>
  );
}

export default PropertyCard;