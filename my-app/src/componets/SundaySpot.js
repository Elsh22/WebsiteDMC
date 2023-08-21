import './SundaySpotStyles.css'
import React from 'react';
import IMG1 from "../newassest/Sundayspot.jpg";

function SundaySpot(props) {
    return (
        <div className='colores'>
          <div className="title-container">
            <h1>Sunday Spot light </h1>
            <p>Name: {props.nextName}</p>
            <p>Why: {props.nextReason}</p>
          </div>
          <div className="image-slider">
          <img src={IMG1} alt='sundayspotlight' />
          </div>
        </div >
      );
      }
    
  
  export default SundaySpot;
  

 