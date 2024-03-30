import React, { useState } from 'react';
import rednose1a from '../../../images/rednose1a.png';
import rednose2a from '../../../images/rednose2a.png';
import rednose3a from '../../../images/rednose3a.png';
import rednose4a from '../../../images/rednose4a.png';
import './carousel.css'; 

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [rednose1a, rednose2a, rednose3a, rednose4a];

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
