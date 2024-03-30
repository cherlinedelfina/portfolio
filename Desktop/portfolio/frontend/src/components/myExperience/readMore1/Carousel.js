import React, { useState } from 'react';
import mobilise1_img from '../../../images/mobilise1_img.png';
import mobilise2_img from '../../../images/mobilise2_img.png';
import mobilise3_img from '../../../images/mobilise3_img.png';
import mobilise4_img from '../../../images/mobilise4_img.png';
import mobilise5_img from '../../../images/mobilise5_img.png';
import mobilise6_img from '../../../images/mobilise6_img.png';
import './carousel.css'; 

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [mobilise1_img, mobilise2_img, mobilise3_img, mobilise4_img, mobilise5_img, mobilise6_img];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`}  className="carousel-image" />
      <button className="carousel-button prev" style={{ left: '40px' }} onClick={prevImage}>{"<"}</button>
      <button className="carousel-button next" style={{ right: '40px' }} onClick={nextImage}>{'\u003e'}</button>
    </div>
  );
};

export default Carousel;
