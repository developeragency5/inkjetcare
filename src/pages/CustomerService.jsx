import React from 'react';
import './CustomerService.css'; 
import backgroundImage from '../assets/cust.jpeg'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomerService = () => {
  return (
    <>
    <Navbar/>
    <div className="customer-service-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h3>Looking for more than just a repair?</h3>
        
        <p>
        We investigate and fix equipment and programming issues, upgrade execution, and give arrangement and upkeep administrations to the two computers and tablets.
        </p>
        <h2 className='ms'>For Quick Assistance:+1-434-477-9315</h2>
        <h3>We Want To Serve Best As We Can</h3>
        <button className="chat-now-btn">Chat Now</button>

        <div className="steps">
          <p>✔ Start Chat</p>
          <p>✔ Schedule Appointment</p>
          <p>✔ Get Device Repaired</p>
        </div>
        <div>
            <p className='mc'>
            InkJetCare is an autonomous outsider, IT specialist organization for programming related issues. Except if expressed, we are not associated with any organization, association, maker, ISP, or email supplier. Our administrations have assisted a huge number of individuals with their PC issues. These administrations may likewise be accessible by the brand proprietor. 
            </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CustomerService;
