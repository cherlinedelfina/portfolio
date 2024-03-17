import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import storysearchImg from '../../images/StorySearch.png';
import mobiliseImg from '../../images/mobilise.png';
import gnnImg from '../../images/GNN.png';
import rednoseImg from '../../images/rednose.png';
import collisionImg from '../../images/collision.png';
import plasticsurgImg from '../../images/plasticsurgvis.png'; 
import selfdrivecarImg from '../../images/selfdrivecar.png';
import skinLesionImg from '../../images/skinLesion.png';
import TestPage from '../readMore/mobilise'; 



const Data = [
  {
    id: 1,
    bgColor: "#B65959",
    icon: <img src={rednoseImg} alt="Rednose Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "Safe Sleep App",
    desc: "A mobile application for Red Nose aimed at promoting safe sleep practices for babies, offering tailored articles for pregnant mothers and parents.",
    link: TestPage
  },
  {
    id: 2,
    bgColor: "#777777",
    icon: <img src={storysearchImg} alt="Storysearch Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "StorySearch",
    desc: "An AI-powered website delivering personalized picture books to counteract the decline in children's attention spans, offering engaging and positive learning experiences."
  },
  {
    id: 3,
    bgColor: "#2DAC7E",
    icon: <img src={mobiliseImg} alt="Mobilise Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "Mobilise Platform",
    desc: "Volunteer portal website for Mobilise to organize outreaches and facilitate volunteer participation."
  },
  {
    id: 4,
    bgColor: "#735A93",
    icon: <img src={gnnImg} alt="GNN Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "Image Generation (GNN)",
    desc: "A generative model incorporating a graph neural network (GNN) backbone to produce images from scene graph descriptions."
  },
  {
    id: 5,
    bgColor: "#B65959",
    icon: <img src={collisionImg} alt="collision Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "Road Entity Detection System (CNN)",
    desc: "Trained a model to detect road entities through a traffic dashcam using CNN architecture."
  },
  {
    id: 6,
    bgColor: "#2DAC7E",
    icon: <img src={skinLesionImg} alt="skinLesion Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "Skin Lesion Classification (CNN)",
    desc: "Utilized convolutional neural network (CNN) architectures for skin lesion identification."
  },
  {
    id: 7,
    bgColor: "#777777",
    icon: <img src={plasticsurgImg} alt="plasticsurg Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "US Plastic Surgery Trends",
    desc:"Interactive data visualization website illustrating the trends of plastic surgery procedures in the US."
  },
  {
    id: 8,
    bgColor: "#735A93",
    icon: <img src={selfdrivecarImg} alt="selfdrivecar Icon" style={{ width: '300px', height: 'auto', display: 'block', margin: 'auto'  }} />,
    title: "Self-Driving Car Dashboard",
    desc:
      "Visually engaging interactive dashboard report on self-driving car queries."
  }
];

export default Data;