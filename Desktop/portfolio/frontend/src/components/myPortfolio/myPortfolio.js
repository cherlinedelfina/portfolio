import React, { useState, useEffect } from 'react';
import './myPortfolio.css'; // Import CSS for styling
import deepneuronLogo from '../../images/deepneuronLogo.png'; // Import the image
import dcLogo from '../../images/180deg.png'; // Import the image
import GVIPLogo from '../../images/gvip.png'; 
import CCALogo from '../../images/CCA.png'; 
import SirohiLogo from '../../images/Sirohi.png'; 


function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [blocks, setBlocks] = useState([
    { 
      id: 1, 
      title: 'Artificial Intelligence Engineer', 
      company: ', Monash DeepNeuron',
      description: 'Collaborated with a team of 5 to develop a generative model integrating GNN backbone, advanced graph learning techniques, and diffusion models to create images from scene graph descriptions.', 
      image: deepneuronLogo,
      squares: ['Python', 'GNN', 'Visual Genome', 'COCO'],
      size: 'small',
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
      expanded: false 
    },
    { 
      id: 5, 
      title: 'SEO Specialist', 
      company: ', Global Victoria Intellect Program',
      description: "Performed SEO keyword research, image optimization, and meta tag enhancements for Sirohi.", 
      image: SirohiLogo,
      expanded: false 
    }
  ]); // Initial block list with titles and descriptions

  // Function to toggle block expansion
  const toggleExpansion = (id) => {
    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === id ? { ...block, expanded: !block.expanded } : block
      )
    );
  };
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`myPortfolio-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1 className="large-text2">Professional</h1>
      <h1 className="large-text3">Experience</h1>
      <div className={`container ${scrollPosition > 100 ? 'scroll-active' : ''}`}>
        <div className="block-list">
          {blocks.map((block) => (
           



           <div key={block.id} className="block">
  <div className="header">
    <span>
      {block.title.split(',').map((part, index) => (
        index === 0 ? 
        <span key={index} className={part.trim() === 'Project Tech Consultant' || part.trim() === 'Lead Tech Consultant' || part.trim() === 'SEO Specialist' || part.trim() === 'Artificial Intelligence Engineer' || part.trim() === 'Media Officer'? 'bold-title' : ''}>{part.trim()}</span> :
        <span key={index}>, {part.trim()}</span>
      ))}
      {block.company && <span className="company">{block.company}</span>}
    </span>
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
      <button className="mode-button" onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default Portfolio;
