import React from "react";
import "./Mission.css";
import IMG1 from '../newassest/Developing Men of Color.png'

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-text">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-paragraph">
        To create an organization in which men of color can interact and grow as a community, our goal is to equip these individuals with the means and resources needed in order to thrive in the college setting. We plan to do so by providing academic advice from other successful members and faculty, insight into how to navigate the undergraduate years, means to professional development and most importantly, provide a brotherhood of students striving together. By providing a close community of minority men working towards the same goal, this will allow us to connect with incoming college students in order to enlarge our community and bond. A critical aspect of our organization is our commitment to community service, this is shown by our consistent mentoring at nearby underserved public schools, our volunteering in the local Richmond community, and our participation in service events held by other organizations.
        </p>
      </div>
      <div className="mission-image">
        <img
          src={IMG1}
          alt="Placeholder image"
        />
      </div>
    </div>
  );
};

export default Mission;
