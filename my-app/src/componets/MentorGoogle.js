import "./MentorGoogleStyles.css"
import React from 'react';

const CardList = () => {
  return (
    <div className="card-list-container">
      <div className="card-container">
        <div className="card-title">Upperclassmen Alumni Mentorship Circle Form</div>
        <button className="card-button">
          <a href="https://docs.google.com/forms/d/10MECiYCVVB9HVzQVcw8CXZGw65uCITWMfAkvg7uwdfg/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">Sign up form</a>
        </button>
      </div>

      <div className="card-container">
        <div className="card-title">Freshmen Campus Navigator Form</div>
        <button className="card-button">
          <a href="https://docs.google.com/forms/d/1ED9M7GjuLsM_TiqpdIkwt8U8bhwEatth9F3w9fKgAlA/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">Sign up form</a>
        </button>
      </div>

      <div className="card-container">
        <div className="card-title">Upperclassmen & Freshman Mentor at benford Form</div>
        <button className="card-button">
          <a href="https://docs.google.com/forms/d/13diWeIdkigSjiLyr1QrGqS7nqrjTQO-kW3LT3Mil9eU/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">Sign up form</a>
        </button>
      </div>
    </div>
  );
};

export default CardList;

