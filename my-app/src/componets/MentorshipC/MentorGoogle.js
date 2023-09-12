import "./MentorGoogleStyles.css"
import React from 'react';

const CardList = () => {
  return (
    <div className="card-list-container">
      <div className="card-container">
        <div className="card-title">Upperclassmen & Freshman Mentor at Binford and Caver Form</div>
        <button className="card-button">
          <a href="https://docs.google.com/forms/d/13diWeIdkigSjiLyr1QrGqS7nqrjTQO-kW3LT3Mil9eU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">Sign up form</a>
        </button>
      </div>
    </div>
  );
};

export default CardList;

