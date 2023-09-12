import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer className="myApp-footer">
      <div className="myApp-container">
        <div className="myApp-row">
          <div className="myApp-footer-col">
            <h4>Developing Men of Color</h4>
            <ul>
              <li><a href="/About">About Us</a></li>
              <li><a href="/About">Our Partnerships</a></li>
            </ul>
          </div>
          <div className="myApp-footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="/Contact">Contact Us</a></li>
              <li><a href="/Event">Calendar</a></li>
              <li><a href="/Newsletter"></a>NewsLetter</li>
              <li><a href="/SportsDmc">Sports Signup</a></li>
            </ul>
          </div>
          <div className="myApp-footer-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="/Mentorship">Mentorship</a></li>
              <li><a href="/Committee">Professional Development Committee</a></li>
              <li><a href="/Committee">Professional Development Committee</a></li>
              <li><a href="/Committee">Social Committee</a></li>
              <li><a href="/Committee">Community Service Committee</a></li>
              <li><a href="/Committee">Academic Committee</a></li>
            </ul>
          </div>
          <div className="myApp-footer-col">
            <h4>follow us</h4>
            <div className="myApp-social-links">
            <a href="https://www.instagram.com/vcu.dmc/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/developing-men-of-color/mycompany/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
