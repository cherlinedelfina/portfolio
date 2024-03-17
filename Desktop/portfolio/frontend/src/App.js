import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import About from "./components/aboutMe/aboutMe";
import Projects from "./components/myPortfolio/myPortfolio";
import Experience from "./components/myExperience/myExperience";
import { useEffect } from 'react';
import './App.css'; 
import sunIcon from './images/sun.png';
import moonIcon from './images/moon.png';
import TestPage from "./components/readMore/mobilise";

function App() {
  const [sections, setSections] = useState([]);
  const [isLightMode, setIsLightMode] = useState(true); // State to track current mode

  // Define sections data
  const sectionsData = [
    { id: 'about', title: 'About', content: <About sections={sections} /> },
    { id: 'experience', title: 'Experience', content: <Experience /> },
    { id: 'portfolio', title: 'Projects', content: <Projects /> },

  ];
  

  // Update sections state
  useEffect(() => {
    setSections(sectionsData);
  }, []);

  // Function to toggle dark/light mode
  const toggleMode = () => {
    setIsLightMode(prevMode => !prevMode); // Toggle mode
  };

  return (
    <Router>
      <div className={`App ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
       <nav className={`horizontal-nav ${isLightMode ? 'light-mode-nav' : 'dark-mode-nav'}`}>
       <ul>
  {sections.map(section => (
    <li key={section.id}>
      <Link to={`#${section.id}`}>{section.title}</Link>
    </li>
  ))}

  <li>
    <Link to="#test-page">Test Page</Link>
  </li>
  <li>
    <button className={`mode-toggle-button ${isLightMode ? 'light-mode-button' : 'dark-mode-button'}`} onClick={toggleMode}>
      <img src={isLightMode ? sunIcon : moonIcon} alt={isLightMode ? 'Light Mode' : 'Dark Mode'} style={{ width: '24px', height: '24px' }} />
    </button>
  </li>
</ul>
        </nav>
        <main className="content">
          {sections.map(section => (
            <section key={section.id} id={section.id}>
              {section.content}
            </section>
          ))}
        </main>
      </div>
    </Router>
  );
}

export default App;
