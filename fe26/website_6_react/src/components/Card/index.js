import React from 'react';
import './styles.css';

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <h2>{cardData.name.first} {cardData.name.last}</h2>
      <h3>{cardData.email}</h3>
      <span>{cardData.about}</span>
    </div>
  );
}

export default Card;