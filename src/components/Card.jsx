import React from 'react';
import { data } from '../assets/data'; 
import './Card.css'; 

const Card = () => {
  return (
    <div className="card-container">
      {data.map(item => (
        <div key={item.id} className="card-item">
          <img src={item.img} alt={item.title} className="card-img" />
          <div className="card-content">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
