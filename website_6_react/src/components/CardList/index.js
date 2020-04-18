import React from 'react';
import Card from '../Card';
import './styles.css';

const CardList = ({ data }) => {
  return (
    <div className="wrapper">
      {data.map(card => <Card cardData={card} />)}
    </div>
  );
}

export default CardList;
