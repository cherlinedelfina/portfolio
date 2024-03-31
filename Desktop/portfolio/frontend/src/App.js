import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Experience from "./components/myExperience/myExperience";
import sunIcon from './images/sun.png';
import moonIcon from './images/moon.png';
import TestPage from "./components/myExperience/readMore/storysearch";
import TestPage1 from "./components/myExperience/readMore1/mobilise";
import TestPage2 from "./components/myExperience/readMore2/rednose";
import TestPage3 from "./components/myExperience/readMore3/hydrosync";
import './App.css'; 

function App() {
  const [isLightMode, setIsLightMode] = useState(true); // State to track current mode

  // Function to toggle dark/light mode
  const toggleMode = () => {
    setIsLightMode(prevMode => !prevMode); // Toggle mode
  };

  return (
    <Router>
      <div className={`App ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
        <nav className={`horizontal-nav ${isLightMode ? 'light-mode-nav' : 'dark-mode-nav'}`}>
          <ul>

            <li>
            <Link to="/" className="custom-link">About</Link>
            </li>

            <li>
              <button className={`mode-toggle-button ${isLightMode ? 'light-mode-button' : 'dark-mode-button'}`} onClick={toggleMode}>
                <img src={isLightMode ? sunIcon : moonIcon} alt={isLightMode ? 'Light Mode' : 'Dark Mode'} style={{ width: '24px', height: '24px' }} />
              </button>
            </li>
          </ul>
        </nav>
        <main className="content">
          <Routes>

            <Route path="/" element={<Experience />} />

            <Route path="/read-storysearch" element={<TestPage />} />
            <Route path="/read-mobilise" element={<TestPage1 />} />
            <Route path="/read-rednose" element={<TestPage2 />} />
            <Route path="/read-hydrosync" element={<TestPage3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
