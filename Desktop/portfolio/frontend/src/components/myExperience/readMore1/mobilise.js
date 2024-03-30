import React from 'react';
import { Link } from 'react-router-dom';
import './mobilise.css';
import mob1 from '../../../images/mob1.png';
import mob2 from '../../../images/mob2.png';
import mob3 from '../../../images/mob3.png';
import mob4 from '../../../images/mob4.png';
import shapes_img from '../../../images/shapes2.png';
import Carousel from './Carousel';


const TestPage1 = ({ isScrollActive, sections }) => {
    return (
        <div className={`combined-container `}>

                
            <div className={`container`}>

            <nav className="horizontal-nav">
                   
                   </nav>
                

                
                
    
                <div className="left-column1">
                    <div className="greeting1">
                        <p className="large1-text1">Mobilise</p>
                    
                        <p className="small1-text2">⭐️ Mobilise is a non-profit organization dedicated to uniting a generation across Australia, providing practical support and sparking conversations about homelessness through monthly outreaches.</p>
                        <p className="small1-text2">❓ As a team leader alongside another colleague, we led a team of 7 to develop a volunteer portal website for our client: Mobilise. This platform enables Mobilise to organize and schedule outreaches efficiently, allowing volunteers to view available opportunities and sign up for those of interest.</p>
                        <p className="small1-text3">🛠️ Built With: React Native, Django, CSS, Figma for design, PostgreSQL database, assigned tasks through Jira, and deployed using Heroku.</p>
                    </div>
                </div>
                <div className="right-column1">
          <div className="image-container1">
                <img src={shapes_img} alt="Shapes" className="shapes-image2" />
                <Carousel />
          </div>


          

        </div>
        

                
            </div>
            <div className="image-grid">
                <div className="image-item">
                    <img src={mob1} alt="Storysearch 1" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>180dc's 10th year anniversary</p>
                </div>
                <div className="image-item">
                    <img src={mob2} alt="Storysearch 2" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Volunteering with Mobilise</p>
                </div>
                <div className="image-item">
                    <img src={mob3} alt="Storysearch 3" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Team bonding with HSP</p>
                </div>
                <div className="image-item">
                    <img src={mob4} alt="Storysearch 4" />
                    <p style={{ textAlign: 'center', fontSize: '18px' }}>Co-team leaders</p>

                </div>
            </div>
          
        </div>
    );
};

          

export default TestPage1;
