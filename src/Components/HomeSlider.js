import React from "react";
import { motion } from "framer-motion";
import HomeImages from "../Data/HomeImages.json";
import { useState, useEffect, useRef } from "react";

export const HomeSlider = () => {
  const [Width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (image) => {
    setTempImgSrc(image);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <button onClick={() => setModel(false)}>X</button>
      </div>
      <div className="slider-contents">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -Width }}
            className="inner-carousel"
          >
            {HomeImages.map((image) => {
              return (
                <motion.div
                  className="items"
                  key={image.id}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => getImage(image.url)}
                >
                  <img src={image.url} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
