import React, { useState, useEffect } from 'react';
import Slider from './slider'; // Assuming Slider component is in a file named Slider.js
import Data from './data';
import './myExperience.css';

function MyExperience() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sliderContainer = document.querySelector('.myExperience-container');
      if (sliderContainer) {
        const top = sliderContainer.getBoundingClientRect().top;
        setIsInView(top >= 0 && top <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let spinTimeout;

    if (isInView) {
      setIsSpinning(true);
      spinTimeout = setTimeout(() => {
        setIsSpinning(false);
      }, 10000); // Spin for 10 seconds
    }

    return () => clearTimeout(spinTimeout);
  }, [isInView]);

  return (
    <div className={`myExperience-container ${isDarkMode ? 'dark-mode' : 'light-mode'} ${isInView ? 'scroll-active' : ''}`}>
      <p className="large-text1">My Projects</p>
      <Slider data={Data} activeSlide={isSpinning ? 0 : 3} isSpinning={isSpinning} /> {/* Pass isSpinning state to Slider */}
      <button className="mode-button" onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default MyExperience;
