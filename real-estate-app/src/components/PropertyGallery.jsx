import { useState } from "react";
import { assetPath } from "../utils/assetPath";

function PropertyGallery({ images }) {
  const [mainImage, setMainImage] = useState(assetPath(images[0]));

  return (
    <div className="gallery">
      <img className="main-image" src={mainImage} alt="Property main view" />

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            className="thumbnail"
            src={assetPath(image)}
            alt={`thumbnail ${index}`}
            onClick={() => setMainImage(assetPath(image))}
          />
        ))}
      </div>
    </div>
  );
}

export default PropertyGallery;