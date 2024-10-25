import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

// Importe as imagens locais
import image1 from "../assets/FOTO_LINKEDIN.png";
import image2 from "../assets/felipaocarecasso.png";
import image3 from "../assets/muielinda.png";

import { CaretRight, CaretLeft } from "phosphor-react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={goToPrevious}>
        <CaretLeft />
      </button>

      <div
        className={styles.imageContainer}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-image-${index}`}
            className={styles.image}
          />
        ))}
      </div>

      <button className={styles.nextButton} onClick={goToNext}>
        <CaretRight />
      </button>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
