import "./LeaderMentorStyles.css"
import React from "react";

const LeaderMentor = ({ name, image, url, Leader }) => {
  return (
    <div className="person-container">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{Leader}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button>View Profile</button>
      </a>
    </div>
  );
};

export default LeaderMentor;
