import React, { useState } from 'react';
import rednose1b from '../../../images/rednose1b.png';
import rednose2b from '../../../images/rednose2b.png';
import rednose3b from '../../../images/rednose3b.png';
import rednose4b from '../../../images/rednose4b.png';

import './carousel.css'; 

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [rednose1b, rednose2b, rednose3b, rednose4b];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`}  className="carousel-image10" />
      <button className="carousel-button prev" onClick={prevImage}>{"<"}</button>
      <button className="carousel-button next" onClick={nextImage}>{'\u003e'}</button>
    </div>
  );
};

export default Carousel;
