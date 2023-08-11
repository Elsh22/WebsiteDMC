import './AboutTeamStyles.css';
import React from 'react';
import Img1 from '../../assets/14.png';
import Img2 from '../../newassest/Thomas.jpeg';
import Img3 from '../../newassest/Ron.PNG';
import Img4 from '../../assets/8.png';
import Img5 from '../../assets/9.png';
import Img6 from '../../assets/7.png';
import Img7 from '../../assets/11.png';
import Img8 from '../../newassest/Ryan.jpg';
import Img9 from '../../newassest/Zion.jpeg';
import Img10 from '../../assets/5.png';
import Img11 from '../../assets/10.jpg';

const AboutTeam = () => {
    const team = [
        { name: 'Thomas Chatman', role: 'President', image: Img2, linkedin:'https://www.linkedin.com/in/thomas--chatman/'},
        { name: 'Kyle Weldon', role: 'Vice-President', image: Img5, linkedin:'https://www.linkedin.com/in/weldonkylevcu/' },
        { name: 'Stephen Kouevi', role: 'Secretary', image: Img4, linkedin:'https://www.linkedin.com/in/stephenkouevi/'},
        { name: 'Omar Aly', role: 'Treasurer', image: Img1, linkedin:'https://www.linkedin.com/in/alyomarm/'},
        { name: 'Adam Haidari', role: 'Mentorship Director', image: Img6, linkedin:'https://www.linkedin.com/in/adam-haidari789/'},
        { name: 'Ryan Griffin', role: 'Public Relations Coordinator', image: Img8, linkedin:'https://www.linkedin.com/in/ryan-griffin-550635195/'},
        { name: 'Zion Segears', role: 'Wellness Director', image: Img9, linkedin:'https://www.linkedin.com/in/zion-segears-767bb7242/'},
        { name: 'Coby Flanagan', role: 'Head of Social Media', image: Img7, linkedin:'https://www.linkedin.com/in/coby-flanagan-3026511a2/'},
        { name: 'DaRon Stuvaints', role: 'Membership Chair', image: Img3, linkedin:'https://www.linkedin.com/in/daron-stuvaints/'},
        { name: 'Alhussein Elshowaya', role: 'Director of IT', image: Img11, linkedin:'https://www.linkedin.com/in/alhussein-elshowaya-5431a322a/'},
        { name: 'Dr.Carlton Goode', role: 'Faculty Advisor', image: Img10, linkedin:'https://www.linkedin.com/in/carlton-goode-ed-d-69172815/'},
      ];
    
      return (
        <div className="teamContainer">
          {team.map((member, index) => (
            <div className="teamMember" key={index}>
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <h3><a href={member.linkedin} target="_blank" rel="noreferrer" style={{ color: 'inherit'}}>{member.name}</a></h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      );
    };
    
    export default AboutTeam;
