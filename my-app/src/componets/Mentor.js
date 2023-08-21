import './MentorStyles.css';
import React from 'react';
import Card1 from '../newassest/MentorA.jpg' ;
import Card2 from '../newassest/freshman.jpg';
import Card3 from '../newassest/Benford.jpg';

const Cards = () => {
  return (
    <div className="mentorCards-container">
      <div className="mentorCard">
        <h2 className="mentorCard-heading">Upperclassmen Alumni Mentorship Circle</h2>
        <img src={Card1} alt="card 1" className='mentorCard-image' />
        <p className="mentorCard-text">Upperclassmen Alumni Mentorship Circle</p>
      </div>
      <div className="mentorCard">
        <h2 className="mentorCard-heading">Freshman Campus Navigator</h2>
        <img src={Card2} alt="card 2" className='mentorCard-image' />
        <p className="mentorCard-text">Freshman Campus Navigator</p>
      </div>
      <div className="mentorCard">
        <h2 className="mentorCard-heading">Upperclassmen & Freshman Mentor at Benford</h2>
        <img src={Card3} alt="card 3" className='mentorCard-image' />
        <p className="mentorCard-text">Upperclassmen & Freshman Mentor at Benford</p>
      </div>
    </div>
  );
};

export default Cards;


