import React from 'react';
import { Link } from 'react-router-dom';
import './storysearch.css';
import unihack1_img from '../../../images/unihack1.png';
import unihack2_img from '../../../images/unihack2.png';
import unihack3_img from '../../../images/unihack3.png';
import unihack4_img from '../../../images/unihack4.png';
import storysearchImg from '../../../images/StorySearch.png';
import shapes_img from '../../../images/shapes2.png';


const TestPage = ({ isScrollActive, sections }) => {
    return (
        <div className={`combined-container `}>

                
            <div className={`container`}>

            <nav className="horizontal-nav">
                   
                   </nav>
                

                
                
    
                <div className="left-column1">
                    <div className="greeting1">
                        <p className="large1-text1">StorySearch</p>
                    
                        <p className="small1-text1">UniHack 2024: hackathon event where my team and I had 48 hours to develop an app/website.</p>
                        <p className="small1-text2">⭐️ StorySearch is an AI-powered website providing engaging and positive learning experiences through personalized picture books. We aim to combat the decline in children's attention spans, often attributed to short-form content like Instagram and TikTok.</p>
                        <p className="small1-text2">❓ How it Works: Utilizing OpenAI for content generation and Firebase Firestore for data management, StorySearch enables kids to customize their profiles and access a wide range of topics through personalized books. Each book, powered by AI, contains unique images and text relevant to the query topic, fostering curiosity and creativity.</p>
                        <p className="small1-text3">🛠️ Built With: Firebase, OpenAI, React, Python, Tailwind CSS, Vector Databases.</p>
                    </div>
                </div>
                <div className="right-column1">
          <div className="image-container1">
            <img src={shapes_img} alt="Shapes" className="shapes-image2" />
            <img src={storysearchImg} alt="Placeholder" className="image1" />    
          </div>
          <div className="link-container">
            <a href="https://unihack-2024-story-search.vercel.app" className="link">
                 &gt; View site
                
            </a>
          </div>

        </div>
        

                
            </div>
            <div className="image-grid">
                <div className="image-item">
                    <img src={unihack1_img} alt="Storysearch 1" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Brainstorming ideas</p>
                </div>
                <div className="image-item">
                    <img src={unihack2_img} alt="Storysearch 2" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>5 minutes in</p>
                </div>
                <div className="image-item">
                    <img src={unihack3_img} alt="Storysearch 3" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>7 AM after an all-nighter</p>
                </div>
                <div className="image-item">
                    <img src={unihack4_img} alt="Storysearch 4" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Monash x UniMelb x RMIT</p>

                </div>
            </div>
          
        </div>
    );
};

          

export default TestPage;
