import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './rednose.css';
import unihack1_img from '../../../images/unihack1.png';
import unihack2_img from '../../../images/unihack2.png';
import unihack3_img from '../../../images/unihack3.png';
import unihack4_img from '../../../images/unihack4.png';
import storysearchImg from '../../../images/StorySearch.png';
import shapes_img from '../../../images/shapes2.png';
import Carousel from './Carousel';
import Carousel1 from './Carousel1';

const TestPage2 = ({ isScrollActive, sections }) => {
    const [showCarousel1, setShowCarousel1] = useState(false);
    const [buttonText, setButtonText] = useState('Dark Mode');

    const handleButtonClick = () => {
        setShowCarousel1(prevState => !prevState);
        setButtonText(prevText => prevText === 'Dark Mode' ? 'Light Mode' : 'Dark Mode');
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
                        <p className="large-text100">Red Nose</p>
                        <p className="small1-text1"> Awarded for best content in 180DC semester 1, 2023.</p>
                        <p className="small-text200">⭐️ Red Nose is Australia's leading authority on safe sleep and safer pregnancy advice and bereavement support for anyone affected by the sudden and unexpected death of a baby or child during pregnancy, birth, infancy or childhood.</p>
                        <p className="small-text200">❓ We developed a safe sleep mobile app for our client: Red Nose. This app promotes safe sleep practices for babies and offers tailored articles for pregnant mothers and parents.</p>
                        <p className="small-text300">🛠️ Built With: ReactJS, TypeScript, Django, CSS, Figma, Firebase, Rowy.</p>
                    </div>
                </div>
                <div className="right-column1">
                    <div className="image-container100">
                        <img src={shapes_img} alt="Shapes" className="shapes-image2" />
                        <button className="switch-button"  onClick={handleButtonClick}>{buttonText}</button>
                        {showCarousel1 ? <Carousel1 /> : <Carousel />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage2;
