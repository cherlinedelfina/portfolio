import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hydrosync.css';
import shapes_img from '../../../images/shapes2.png';
import Carousels from './Carousels';

const TestPage3 = ({ isScrollActive, sections }) => {

    const handleButtonClick = () => {
        document.body.classList.toggle('no-scroll');
    };
    document.body.classList.toggle('no-scroll');

    return (
        
        <div className={`combined-container1 `}>
            <div className={`container100`}>
                <nav className="horizontal-nav">
                </nav>
                <div className="left-column1">
                    <div className="greeting1">
                        <p className="large-text100">HydroSync</p>
                        <p className="small-text100">MedHack 2024: hackathon event where my team and I had 48 hours to develop a solution to problems in the aged-care field.</p>
                        <p className="small-text200">⭐️ HydroSync is a non-invasive hydration monitoring solution that utilizes electrodermal activity  &#40;EDA&#41; patches seamlessly integrated into the sole of shoes to assess hydration levels. The data is transmitted to our app, providing alerts and continuous monitoring functionalities. We aim to combat dehydration among the elderly, as it is often overlooked yet significantly impacts health.</p>
                        <p className="small-text200">❓ How Does it Work? Our mobile app uses the obtained data and employs a basic CNN model to analyze EDA signals, establishing individual hydration thresholds based on EDA changes and personal data. It then indicates hydration levels and alerts family members in case of alarming dehydration.</p>
                        <p className="small-text300">🛠️ Built With: Python, React, TypeScript, Django, CSS, Figma.</p>
                    </div>
                </div>
                <div className="right-column1">
                    <div className="image-container100">
                        <img src={shapes_img} alt="Shapes" className="shapes-image2" />
                        <Carousels />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage3;
