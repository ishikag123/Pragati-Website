import React from "react";
import { useState } from "react";

export default function GalleryWrapper({ images }) {
  const [galleryModel, setGalleryModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (image) => {
    setTempImgSrc(image);
    setGalleryModel(true);
  };
  return (
    <>
      <div className={galleryModel ? "galleryModel open" : "galleryModel"}>
        <img src={tempImgSrc} alt="" />
        <button onClick={() => setGalleryModel(false)}>X</button>
      </div>
      <div className="wrapper">
        {images.map((item) => (
          <div
            key={item.id}
            className="wrapper-images"
            onClick={() => getImage(item.url)}
          >
            <img src={item.url} alt="" style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
}
