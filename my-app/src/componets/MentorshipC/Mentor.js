import './MentorStyles.css';
import React from 'react';
import Card3 from '../../newassest/Benford.jpg';

const Cards = () => {
  return (
    <div className="mentorCards-container">
      <div className="mentorCard">
        <h2 className="mentorCard-heading">Upperclassmen & Freshman Mentor at Binford and Caver</h2>
        <img src={Card3} alt="card 3" className='mentorCard-image' />
      </div>
    </div>
  );
};

export default Cards;


