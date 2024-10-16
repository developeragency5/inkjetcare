import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  { 
    name: 'Will James',
    jobTitle: 'Business Analyst',
    rating: 4,
    text: "I had a complicated issue with my home security system, but InkJetCare  tackled it with ease. Their knowledgeable technician identified the problem quickly and implemented a solution that restored my peace of mind. I highly recommend their serviceI definitely disliked my home security framework, yet GeeksonWheelCare handled it effortlessly. Their learned specialist distinguished the issue rapidly and executed an answer that reestablished my inner harmony. I strongly suggest their administrations!",
  },
  {
    name: 'Harris Burrows',
    jobTitle: 'IT Specialist',
    rating: 5,
    text: 
    "InkJetCare  made all the difference when my cooler unexpectedly quit cooling. Their specialist showed up expeditiously, analyzed a defective blower, and had it supplanted quickly. Because of them, I didn't need to stress over ruined food!"
 },
  {
    name: 'Ashley Astle',
    jobTitle: 'Marketing Director',
    rating: 3,
    text: "I've depended on InkJetCare  for all my tech needs, from PC fixes to savvy home establishments, and they've won't ever frustrate. Their group is dependable, learned, and consistently exceeds all expectations to guarantee consumer loyalty. "  },
  {
    name: 'Helen wise',
    jobTitle: 'Business Owner',
    rating: 5,
    text: "At the point when my WiFi signal was continually dropping, I called InkJetCare  for help. Their group advanced my organization arrangement, and presently I appreciate consistent network all through my home. On account of them, streaming and gaming have never been smoother!"  },
  {
    name: 'Mikkel Smith',
    jobTitle: 'Freelancer',
    rating: 4,
    text: "I couldn't figure out why my printer kept on staying until I arrived at InkJetCare . Their master fixed the issue as well as cut out an amazing open door to figure out what turned out gravely and how to prevent it later on. Unprecedented help!!"
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  const handleNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setFadeClass('fade-in');
    }, 500); // Match this to the duration of the transition in CSS
  };

  const handlePrev = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFadeClass('fade-in');
    }, 500);
  };

  const { name, jobTitle, rating, text } = testimonials[currentTestimonial];

  return (
    <div className="testimonial-container">
      <h2>Testimonials</h2>
      <div className={`testimonial-content ${fadeClass}`}>
        <div className="icon">
        <img src="/asset/testimonial.png" alt="user icon" className='testmonial-image'/>
        </div>
        <div className="name" style={{color:"black"}}>{name}</div>
        <div className="job-title">{jobTitle}</div>
        <div className="stars">
          {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
        </div>
        <p className="testimonial-text">{text}</p>
      </div>
      <div className="testimonial-nav">
        <button className="nav-button" onClick={handlePrev}>
          {'←'}
        </button>
        <button className="nav-button" onClick={handleNext}>
          {'→'}
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
