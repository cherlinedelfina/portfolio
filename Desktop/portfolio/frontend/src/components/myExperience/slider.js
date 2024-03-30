import React, { useState } from "react";
import { Link } from "react-router-dom";
import './myExperience.css';
import Data from './data';


const Slider = (props) => {
  const [activeSlide, setActiveSlide] = useState(2);

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
          <SliderContent {...item} /> {/* Include SliderContent here */}
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
      <div className="read-more">
        <Link to={props.link} className="read-more-link">Read More</Link> {/* Use the link prop */}
      </div>

      <div className="reflection" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), #0D0F0E)`,
        backgroundColor: props.bgColor
      }}></div>
    </div>
  );
};


export default Slider;

