import React from 'react';
import './Main.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import repair1 from '../assets/repair1.jpg'
import repair2 from '../assets/repair2.jpg'

const Main = (props) => {
  return (
    <div className='main-section'>
      <div className="desc">
        <h2 className="main-head">Choose Product Category</h2>
        <div className='yellow'></div>
        <p className='para'>
          We accept innovation ought to work for everybody. That is the reason we offer a full scope of tech and machines fix answers for keep you associated from insurance and fix to establishment and master support.
          <br />What might we do for you today?
        </p>
        <h2 className="contact-head">For Quick Assistance: +1-434-424-3271.</h2>
      </div>

      <div className='cards'>
        {/* Wrap Card component with Link to navigate to CustomerService page */}
        <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card />
        </Link>
      </div>

      <div className='appointment'>
        <div>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 className='expert'>Book your Appointment</h2>
          </Link>
        </div>
        <div>

          <h2 className='expert'>Ask an experts</h2>

        </div>
      </div>

      <div className='repair'>
        <div className='content-repair'>
          <h2 className='rep-head'> Quick fixes, directly in your area</h2>
          <p className='rep-des'>
            Large number of neighborhood fix specialists prepared to help
          </p>
          <p className='rep-icon'>Thousands of local repair experts ready to help</p>
          <p className='rep-icon'>Most fixes done in same day</p>
          <Link to="/contact-us">
            <button className='button' style={{ cursor: "pointer" }}>Book your Appointment</button>
          </Link>

        </div>
        <div className='rep-img-div'>
          <img src={repair1} className='img-rep' alt="Repair service" />
        </div>
      </div>

      <div className='appointment'>
        <div>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit', }}>
            <h2 className='expert'>Book your Appointment</h2>
          </Link>
        </div>
        <div>

          <h2 className='expert'>Ask an experts</h2>

        </div>
      </div>


      <div className='repair'>
        <div className='content-repair'>
          <h2 className='rep-head'>Who we are?</h2>
          <p className='rep-des'>
          InkJetCare is a comprehensive tech and appliance repair service provider that caters to a wide range of electronic devices and appliances.
          </p>
          <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit', }}>
            <button className='button' style={{ cursor: "pointer" }}>Read More</button>
          </Link>


        </div>
        <div className='rep-img-div'>
        {/* '/asset/about-us-banner.webp' */}
          <img src={repair2} className='img-rep' alt="About us" />
        </div>
      </div>
    </div>
  );
};

export default Main;
