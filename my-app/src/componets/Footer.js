import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer className="myApp-footer">
      <div className="myApp-container">
        <div className="myApp-row">
          <div className="myApp-footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="/About">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="myApp-footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="/Contact">Contact Us</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="myApp-footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">watch</a></li>
              <li><a href="#">bag</a></li>
              <li><a href="#">shoes</a></li>
              <li><a href="#">dress</a></li>
            </ul>
          </div>
          <div className="myApp-footer-col">
            <h4>follow us</h4>
            <div className="myApp-social-links">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
