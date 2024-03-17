import React, { useState, useEffect } from 'react';
import './aboutMe.css';
import self_img from '../../images/self.png';
import shapes_img from '../../images/shapes2.png';
import lines_vid from '../../images/lines.mov';
import { Link } from 'react-router-dom';

function About({ sections }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const containerHeight = document.querySelector('.container1').clientHeight;
      const threeQuarterHeight = (1 / 4) * containerHeight;

      setScrollPosition(currentScrollPosition);
      setIsScrollActive(currentScrollPosition > threeQuarterHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container1 ${isScrollActive ? 'scroll-active' : ''}`}>
      <nav className="horizontal-nav">
        <ul>
          {sections.map(section => (
            <li key={section.id}>
              <Link to={`#${section.id}`}>{section.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <video className="lines-video" autoPlay loop muted>
        <source src={lines_vid} type="video/mov" />
        Your browser does not support the video tag.
      </video>
      <div className="left-column">
        <div className="greeting">
          <p className="small-text">Hi there! My name is</p>
          <p className="large-text">Cherline Delfina</p>
          <p className="small-text2">I'm pursuing my Master's in Artificial Intelligence at Monash University, with experience in full-stack software development. Additionally, I enjoy art and possess a keen eye for designing and coding clean, interactive frontends.</p>
        </div>
      </div>
      <div className="right-column">
        <div className="image-container">
          <img src={shapes_img} alt="Shapes" className="shapes-image" />
          <div className="square-outline"></div>
          <img src={self_img} alt="Placeholder" className="image" />
        </div>
      </div>
    </div>
  );
}

export default About;
