import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../readMore1//mobilise.css';
import shapes_img from '../../../images/shapes2.png';
import Carousels from './Carousels';
import hs1 from '../../../images/hs1.png';
import hs2 from '../../../images/hs2.png';
import hs3 from '../../../images/hs3.png';
import hs4 from '../../../images/hs4.png';

const TestPage3 = ({ isScrollActive, sections }) => {



    return (
        
        <div className={`combined-container `}>
            <div className={`container`}>
                <nav className="horizontal-nav">
                </nav>
                <div className="left-column1">
                    <div className="greeting1">
                        <p className="large1-text1">HydroSync</p>
                        <p className="small1-text1">MedHack 2024: hackathon event where my team and I had 48 hours to develop a solution to problems in the aged-care field.</p>
                        <p className="small1-text2">⭐️ HydroSync is a non-invasive hydration monitoring solution that utilizes electrodermal activity  &#40;EDA&#41; patches seamlessly integrated into the sole of shoes to assess hydration levels. The data is transmitted to our app, providing alerts and continuous monitoring functionalities. We aim to combat dehydration among the elderly, as it is often overlooked yet significantly impacts health.</p>
                        <p className="small1-text2">❓ How Does it Work? Our mobile app uses the obtained data and employs a basic CNN model to analyze EDA signals, establishing individual hydration thresholds based on EDA changes and personal data. It then indicates hydration levels and alerts family members in case of alarming dehydration.</p>
                        <p className="small1-text3">🛠️ Built With: Python, React, TypeScript, Django, CSS, Figma.</p>
                    </div>
                </div>
                <div className="right-column1">
                    <div className="image-container100" style={{ paddingTop: '100px'}}>
                        <img src={shapes_img} alt="Shapes" className="shapes-image2" />
                        <Carousels />
          </div>


          

        </div>
        
        

                
            </div>
            <div className="image-grid" style={{ paddingTop: '20px'}}>
                <div className="image-item">
                    <img src={hs1} alt="Storysearch 1" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Brainstorming ideas</p>
                </div>
                <div className="image-item">
                    <img src={hs2} alt="Storysearch 2" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Final pitch</p>
                </div>
                <div className="image-item">
                    <img src={hs3} alt="Storysearch 3" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>2 a.m. on the day of the pitch</p>
                </div>
                <div className="image-item">
                    <img src={hs4} alt="Storysearch 4" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>The AC3 team</p>

                </div>
                </div>
          
        </div>
    );
};

          


export default TestPage3;



