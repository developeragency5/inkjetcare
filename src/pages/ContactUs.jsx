import React, { useState } from "react";
import './ContactUs.css'; 
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';  // Import Link

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div>
      <div className="main">
        <div className="head-div">
          {/* Make the heading a link to the homepage */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 className="main-heading">GeeksonWheel Care</h2>
          </Link>
        </div>
        <div className="sec-div"></div>
      </div>

      <div className="contact-container">
        <div className="get-in-touch">
          <h2>Get In Touch</h2>
          <p>
            Contact us today for your tech and appliances repair services. Book a
            service today! We're committed to your complete satisfaction with our
            service.
          </p>
          <p><strong>Address:</strong> 3065 Brighton 2nd St
          Brooklyn, NY 11235</p>
          <p><strong>Email:</strong> InkJetCare@gmail.com</p>
          <button className="chat-now-btn">Chat Now</button>
        </div>

        <div className="form-section">
          <h2>Request Free Consultation</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
