import React, { useState, useEffect } from 'react';
import Slider from './slider'; // Assuming Slider component is in a file named Slider.js
import Data from './data';
import './myExperience.css';
import './aboutMe.css';
import './myPortfolio.css';
import self_img from '../../images/self.png';
import shapes_img from '../../images/shapes2.png';
import lines_vid from '../../images/lines.mov';
import deepneuronLogo from '../../images/deepneuronLogo.png'; // Import the image
import dcLogo from '../../images/180deg.png'; // Import the image
import CCALogo from '../../images/CCA.png'; 
import SirohiLogo from '../../images/Sirohi.png'; 
import { Link } from 'react-router-dom'; // Import Link from React Router

function MyExperience({ sections = [] }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [animateContainer1, setAnimateContainer1] = useState(false);
  const [containerHeight, setContainerHeight] = useState(600);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);
      setIsScrollActive(currentScrollPosition > window.innerHeight / 3);

      const portfolioContainer = document.querySelector('.myExperience-container');
      if (portfolioContainer) {
        const top = portfolioContainer.getBoundingClientRect().top;
        setIsPortfolioVisible(top >= 0 && top <= window.innerHeight/1.7);
      }

      const experienceSection = document.querySelector('.myExperience-container');
      if (experienceSection) {
        const top = experienceSection.getBoundingClientRect().top;
        setIsSliderVisible(top >= 0 && top <= window.innerHeight /2);
      }
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSliderVisible) {
      document.querySelector('.slider-container').classList.add('fade-in');
    }
  }, [isSliderVisible]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const textColorClass = isDarkMode ? 'text-light' : 'text-dark';

  useEffect(() => {
    const handleScroll = () => {
      const sliderContainer = document.querySelector('.myExperience-container');
      if (sliderContainer) {
        const top = sliderContainer.getBoundingClientRect().top;
        setIsInView(top >= 0 && top <= window.innerHeight);
      }
      setScrollPosition(window.scrollY);
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
  }, [isPortfolioVisible]);

  const [blocks, setBlocks] = useState([
    { 
      id: 1, 
      title: 'Artificial Intelligence Engineer', 
      company: ', Monash DeepNeuron',
      description: 'Collaborated with a team of 5 to develop a generative model integrating GNN backbone, advanced graph learning techniques, and diffusion models to create images from scene graph descriptions.', 
      image: deepneuronLogo,
      squares: ['Python', 'GNN', 'Visual Genome', 'COCO'],
      size: 'small',
      dateRange: 'Apr 2023 - Present',
      expanded: false 
    },
    { 
      id: 2, 
      title: 'Lead Tech Consultant',
      company: ', 180 Degrees Consulting',
      description: 'Led a team of 7 to successfully develop a web application for Mobilise, fostering collaboration and efficiently organizing tasks using sprints to ensure a streamlined workflow and optimized team performance. Maintained bi-weekly communication with the client for project updates through Zoom.', 
      image: dcLogo,
      squares: ['Jira', 'Figma','ReactJS', 'Django', 'PostgreSQL', 'Heroku'],
      size: 'large', 
      dateRange: 'Jul 2023 - Dec 2023',
      expanded: false 
    },
    { 
      id: 3, 
      title: 'Project Tech Consultant', 
      company: ', 180 Degrees Consulting',
      description: 'Collaborated with a team of 5 to develop a safe sleep mobile application for Red Nose, taking the lead in UI/UX design and frontend development.', 
      award: '> Awarded for best content in 180DC semester 1, 2023.',
      image: dcLogo,
      squares: ['Jira', 'Figma','Rowy','TypeScript', 'React Native'], 
      size: 'large', 
      dateRange: 'Feb 2023 - Jun 2023',
      expanded: false 
    },
    { 
      id: 4, 
      title: 'Media Officer', 
      company: ', CCA',
      description: "Designed visually captivating promotional materials and event launch content, enriching user experience and strengthening brand identity.", 
      image: CCALogo,
      squares: ['Figma','Canva','Adobe Lightroom', 'Adobe Photoshop'],
      size: 'large',
      dateRange: 'Dec 2022 - Dec 2023',
      expanded: false 
    },
    { 
      id: 5, 
      title: 'SEO Specialist', 
      company: ', Global Victoria Intellect Program',
      description: "Performed SEO keyword research, image optimization, and meta tag enhancements for Sirohi.", 
      image: SirohiLogo,
      dateRange: 'Apr 2023 - Apr 2023',
      expanded: false 
    }
  ]); // Initial block list with titles and descriptions

  // Function to toggle block expansion
  useEffect(() => {
    const handleScroll = () => {
      if (isPortfolioVisible && !animateContainer1) {
        setAnimateContainer1(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPortfolioVisible, animateContainer1]);

  // Function to toggle block expansion
  const toggleExpansion = (id) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ? { ...block, expanded: !block.expanded } : block
      )
    );

    

    // Calculate the height of the container based on the number of expanded blocks
    const expandedBlocksCount = blocks.filter(block => block.expanded).length;
    const newContainerHeight = 680+expandedBlocksCount * 300; // Adjust these values as needed
    
    setContainerHeight(newContainerHeight);
  };
  return (
    <div className={`combined-container ${isPortfolioVisible ? 'scroll-active' : ''}`}>
      <div className={`container1 ${isPortfolioVisible ? 'scroll-active' : ''} ${animateContainer1 ? 'exit-left' : ''}`}>
        <nav className="horizontal-nav">
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <Link to={`#${section.id}`}>{section.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="left-column1000">
          <div className="greeting">
            <p className="small-text">Hi there! My name is</p>
            <p className="large-text">Cherline Delfina</p>
            <p className="small-text20">I'm pursuing my Master's in Artificial Intelligence at Monash University, with experience in full-stack software development. Additionally, I enjoy art and possess a keen eye for designing and coding clean, interactive frontends.</p>
          </div>
        </div>
        <div className="right-column1000">
          <div className="image-container">
            <img src={shapes_img} alt="Shapes" className="shapes-image" />
            <div className="square-outline"></div>
            <img src={self_img} alt="Placeholder" className="image" />
          </div>
        </div>
      </div>
       
      <div className={`myExperience-container ${isPortfolioVisible ? 'scroll-active' : ''}`}>
        
        <p className="large-text1">My Projects</p>
        <div className={`slider-container ${isSliderVisible ? 'fade-in' : ''}`}>
        <Slider data={Data} activeSlide={isPortfolioVisible ? 0 : 3} isSpinning={isPortfolioVisible} /> {/* Pass isSpinning state to Slider */}
      </div>
      </div>



      
      <div className={`myPortfolio-container ${isPortfolioVisible ? 'scroll-active' : ''}`}>
      <h1 className={`large-text2 `}>Professional</h1>
        <h1 className={`large-text3`}>Experience</h1>
      
       
        <div className={`container1000r ${scrollPosition > 100 ? 'scroll-active' : ''}`} style={{ height: containerHeight }}>
          
          
          
        <div className="block-list">

        {blocks.map((block) => (
          <div key={block.id} className="block">
            <div className="header">
              <span>
                {block.title.split(',').map((part, index) => (
                  index === 0 ? 
                  <span key={index} className={part.trim() === 'Project Tech Consultant' || part.trim() === 'Lead Tech Consultant' || part.trim() === 'SEO Specialist' || part.trim() === 'Artificial Intelligence Engineer' || part.trim() === 'Media Officer' ? 'bold-title' : ''}>{part.trim()}</span> :
                  <span key={index}>, {part.trim()}</span>
                ))}
                {block.company && <span className="company">{block.company}</span>}
              </span>
              <span className="date-range">{block.dateRange}</span> {/* Date range here */}
              <button className="expand-btn" onClick={() => toggleExpansion(block.id)}>
                  {block.expanded ? '-' : '+'}
                </button>
              </div>
              {block.expanded && (
                <div className="expanded-description">
                  <div className="description-text">
                    {block.description}
                    {block.award && (
                      <div className="bold">{block.award}</div>
                    )}
                  </div>
                  {block.image && (
                    <img
                      src={block.image}
                      alt=""
                      className={`description-image ${block.size === 'large' ? 'large-image' : block.size === 'medium' ? 'medium-image' : 'small-image'}`}
                    />
                  )}
                  <div className="additional-info">
                    <div className="squares-row">
                      {block.squares && block.squares.map((square, index) => (
                        <div key={index} className="info-square">{square}</div>
                      ))}
                    </div>
                    <div className="squares-row">
                      {block.squares2 && block.squares2.map((square, index) => (
                        <div key={index} className="info-square">{square}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
      
      

      

    </div>
  );
}

export default MyExperience;
