import React, { useState } from 'react';
import hydrosync1 from '../../../images/hydrosync1.png';
import hydrosync4 from '../../../images/hydrosync4.png';
import hydrosync3 from '../../../images/hydrosync3.png';
import hydrosync5 from '../../../images/hydrosync5.png';
import './carousel.css'; 

const Carousels = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hydrosync1, hydrosync4, hydrosync5, hydrosync3];

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

export default Carousels;
