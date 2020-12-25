import React from 'react';
import Card from '../Card';
import './styles.css';

const CardList = ({ data }) => {
  return (
    <div className="wrapper">
      {data.map(card => <Card cardData={card} key={card._id} />)}
    </div>
  );
}

export default CardList;
