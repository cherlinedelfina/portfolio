import React, { useState } from "react";
import { Link } from "react-router-dom";
import './myExperience.css';
import TestPage from '../readMore/mobilise'; 
import Data from './data';

const Slider = (props) => {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <div className="slideC">
      {Data.map((item, i) => (
        <div
          key={item.id}
          className="slide"
          style={{
            background: item.bgColor,
            boxShadow: `0 5px 20px ${item.bgColor}30`,
            ...getStyles(i)
          }}
          onClick={() => goToSlide(i)}
        >
          <SliderContent {...item} /> {/* Pass the entire item object */}
        </div>
      ))}
    </div>
  );
};

const SliderContent = (props) => {
  return (
    <div className="sliderContent">
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <div className="reflection" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), #0D0F0E)`,
        backgroundColor: props.bgColor
      }}></div>
      {props.id === 1 ? (
        <Link to={TestPage}>Read More</Link>
      ) : (
        <Link to={props.link}>Read More</Link>
      )}
    </div>
  );
};


export default Slider;