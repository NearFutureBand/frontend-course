import React from 'react';
import './style.css';

const Card = ({ picture, name }) => {
  return (
    <div className="card">
      <img src={picture} className="card-image" />
      <div className="card-content">
        <h2>{name.first}</h2>
        <h4>{name.last}</h4>
      </div>
    </div>
  )
}

export default Card;
