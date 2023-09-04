import React from "react";

function GalleryItem({ image }) {
  return (
    <div className="galleryItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
    </div>
  );
}

export default GalleryItem;
