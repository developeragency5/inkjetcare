import React, { useEffect, useState } from 'react';
import './CustomerService.css'; 
import backgroundImage from '../assets/cust.jpeg'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomerService = () => {
  const [jivoChatReady, setJivoChatReady] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://code.jivochat.com/widget/w7Ros1F3lu'; // Replace with your actual widget ID
    script.async = true;
    script.onload = () => {
      console.log('JivoChat script loaded successfully');
      setJivoChatReady(true);
    };
    script.onerror = () => {
      console.error('Failed to load JivoChat script');
      setJivoChatReady(false);
    };
    document.body.appendChild(script);
  
    return () => {
      const existingScript = document.querySelector(`script[src="https://code.jivochat.com/widget/w7Ros1F3lu"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);
  

  const handleChatClick = () => {
    if (jivoChatReady || window.jivo_api) {
      console.log("Opening JivoChat");
      window.jivo_api.open();
    } else {
      console.error('JivoChat script not loaded');
    }
  };

  return (
    <>
      <Navbar />
      <div className="customer-service-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <h3>Looking for more than just a repair?</h3>
          <p>
            We investigate and fix equipment and programming issues, upgrade execution, and provide arrangement and upkeep administrations for both computers and tablets.
          </p>
          <h2 className='ms'>For Quick Toll free Assistance: +1-434-477-9315</h2>
          <h3>We Want To Serve Best As We Can</h3>
          <button className="chat-now-btn" onClick={handleChatClick}>Chat Now</button>

          <div className="steps">
    <p><span className="tick">✔</span> Start Chat</p>
    <p><span className="tick">✔</span> Schedule Appointment</p>
    <p><span className="tick">✔</span> Get Device Repaired</p>
</div>

          <div>
            <p className='mc'>
              InkJetCare is an independent third-party IT specialist for software-related issues. Unless stated, we are not affiliated with any organization, association, manufacturer, ISP, or email provider. Our services have assisted thousands of individuals with their computer issues. These services may also be available through the brand owner.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerService;
