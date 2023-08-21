import './HeroStyles.css';
import React, { useState } from 'react';
import IMG2 from "../newassest/home3.jpg"
import IMG1 from "../assets/1.png"
import IMG3 from "../newassest/home2.jpg"
import IMG4 from "../newassest/home.jpg"


function Hero(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [IMG1, IMG2, IMG3, IMG4];

    function handleNumberClick(index) {
        setCurrentIndex(index);
    }

    return(
        <div className={props.cName}>
            <div className='hero-text'>
                <h1>{props.title}<br />{props.location}</h1>
                <h2>{props.extraTitle}</h2>
                <p>{props.text}</p>
                <p>{props.extraText}</p>
                <div className="parent-container">
                    <iframe title={`youtube-video`} width="720"  height="405"  src={`https://www.youtube.com/embed/0P37B_g8lfQ?quality=high`}  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                </div>
                <a href={props.url} target="_blank" rel="noopener noreferrer" className={props.btnClass}>{props.buttonText}</a>
            </div>
            <div className="parent-container-two"> 
                <img src={images[currentIndex]} title={`Image ${currentIndex + 1}`} alt={`Image ${currentIndex + 1}`}  />
                <div className="number-indicator">
                    {images.map((image, index) => (
                        <span key={index} onClick={() => handleNumberClick(index)} className={currentIndex === index ? "active" : ""}>{index + 1}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;



