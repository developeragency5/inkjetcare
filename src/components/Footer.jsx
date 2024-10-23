import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css';
import AboutUs from '../pages/AboutUs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='main-footer'>
        <Link to="/about-us" className='footer-link'>About Us</Link>
        <Link to="/privacy-policy" className='footer-link'>Privacy Policy</Link>
        <Link to="/terms-of-use" className='footer-link'>Terms of Use</Link>
        <Link to="/subscription-policy" className='footer-link'>Subscription Policy</Link>
        <Link to="/contact-us" className='footer-link'>Contact Us</Link>
      </div>
    <div>
        <p className='para'>Copyright © 2023 InkJetCare. All Rights Reserved</p>
        <h2 className='name'>InkJetCare</h2>
      </div>
    </div>
  );
};

export default Footer;
