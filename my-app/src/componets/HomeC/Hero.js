import React, { useState, useEffect } from 'react';
import './HeroStyles.css';
// import CountUp from 'react-countup';
// import Trigger from 'react-scroll-trigger';
//import IMG1 from "../../assets/1.png";
import IMG1 from "../../newassest/home45.jpg";
import IMG2 from "../../newassest/home46.jpg";
import IMG3 from "../../newassest/home47.jpg";
import IMG4 from "../../newassest/home48.jpg";

function Hero(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [IMG1, IMG2, IMG3, IMG4];
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(timer);
    }, [images.length]);

    return (
      <div className='hero'>
      <div className="image-containers">
                  <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>        
        <div className={props.cName}>
            <div className='hero-text'>
                <h1>{props.title}<br />{props.location}</h1>
                <div className="parent-container">
                    <iframe title={`youtube-video`} width="720" height="405" src={`https://www.youtube.com/embed/0P37B_g8lfQ?quality=high`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
                <div className="button-container">
                    <a href={props.url} target="_blank" rel="noopener noreferrer" className='show'>{props.buttonText}</a>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Hero;

/**
 <Trigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
                    <div className="info-section">
                        <div className="info-column">
                            <h3>
                                {visible ? <CountUp end={600} duration={2} /> : 0}
                            </h3>
                            <p>Men of Color Helped in Graduating</p>
                        </div>
                        <div className="info-column">
                            <h3>
                                {visible ? <CountUp end={89.9} decimals={1} duration={2} /> : 0}
                            </h3>
                            <p>Retention Rate in Men of Color</p>
                        </div>
                        <div className="info-column">
                            <h3>
                                {visible ? <CountUp end={4.00} decimals={2} duration={2} /> : 0}
                            </h3>
                            <p>Average GPA in Men of Color</p>
                        </div>
                    </div>
                </Trigger>
 */



