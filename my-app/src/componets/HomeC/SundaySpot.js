import './SundaySpotStyles.css';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from '../Motion/motion'; // Importing fadeIn from your motion.js file
import IMG1 from "../../newassest/Sundayspot.jpg";
import IMG2 from "../../newassest/Sundayspot2.jpg";
import IMG3 from "../../newassest/Sundayspot3.jpg";

function SundaySpot(props) {
  const controls = useAnimation();

  const handleScroll = () => {
    const element = document.querySelector('.sundaySpot-card-container');
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className='colores'>
      <div className="title-container">
        <h1>SundaySpot Light </h1>
      </div>
      <div className="sundaySpot-card-container">
        {[IMG1, IMG2, IMG3].map((image, index) => (
          <motion.div
            className="sundaySpot-card"
            key={index}
            initial="hidden"
            animate={controls}
            variants={fadeIn('right', 'tween', 0.5, 0.5)}
          >
            <img src={image} alt={`card-image-${index}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SundaySpot;

 