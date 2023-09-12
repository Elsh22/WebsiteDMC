import './AboutTeamStyles.css';
import React from 'react';
import Hassan from '../../assets/Hassan.jpg';
import Hussein from '../../assets/Hussein.jpg';
import Goode from '../../assets/Goode.png';
import Thomas from '../../assets/Thomas.jpg';
import Ron from '../../assets/Ron.jpg';
import Stephen from '../../assets/Stephen.png';
import Josh from '../../assets/Josh.jpg';
import Omar from '../../assets/Omar.jpg';
import Zion from '../../assets/Zion.jpg';
import Xavier from '../../assets/Xavier.jpg';
import David from '../../assets/David.jpg';
import DeAngelo from '../../assets/DeAngelo.jpg';
import Paul from '../../assets/Paul.jpg';

const AboutTeam = () => {
    const team = [
        { name: 'DaRon Stuvaints', role: 'President', image: Ron, linkedin:'https://www.linkedin.com/in/daron-stuvaints/'},
        { name: 'Omar Aly', role: 'Vice-President', image: Omar, linkedin:'https://www.linkedin.com/in/alyomarm/'},
        { name: 'Alhussein Elshowaya', role: 'Secretary', image: Hussein, linkedin:'https://www.linkedin.com/in/alhussein-elshowaya-5431a322a/'},
        { name: 'Alhassan Elshowaya', role: 'Treasurer', image: Hassan, linkedin:'https://www.linkedin.com/in/alhassan-elshowaya-214bb820a/'},
        { name: 'Josh Hines', role: 'Mentorship Director', image: Josh, linkedin:'https://www.linkedin.com/in/joshhines4/'},
        { name: 'DeAngelo Bailey', role: 'Public Relations Coordinator', image: DeAngelo, linkedin:'https://www.linkedin.com/in/deangelo-bailey-5686ba253/'},
        { name: 'Zion Segears', role: 'Wellness Director', image: Zion, linkedin:'https://www.linkedin.com/in/zion-segears-767bb7242/'},
        { name: 'Paul Tucker', role: 'Head of Social Media', image: Paul, linkedin:'https://www.linkedin.com/in/paul-tucker-550978271/'},
        { name: 'David Foster', role: 'Membership Chair', image: David, linkedin:'https://www.linkedin.com/in/david-foster-b063b0226/'},
        { name: 'Xavier Lewis', role: 'Event Coordinator', image: Xavier, linkedin:'https://www.linkedin.com/in/xavier-lewis-9916bb253/'},
        { name: 'Stephen Kouevi', role: 'Director of IT', image: Stephen, linkedin:'https://www.linkedin.com/in/stephenkouevi/'},
        { name: 'Dr.Carlton Goode', role: 'Faculty Advisor', image: Goode, linkedin:'https://www.linkedin.com/in/carlton-goode-ed-d-69172815/'},
        { name: 'Thomas Chatman', role: 'Second Advisor', image: Thomas, linkedin:'https://www.linkedin.com/in/thomas--chatman/'},
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
