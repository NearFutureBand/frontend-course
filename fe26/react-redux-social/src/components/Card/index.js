import React, { Component, memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const getClassNames = (small) => {
  console.log('getclassnames');
  return {
    card: `card ${small && 'card-small'}`,
    cardImage: `card-image ${small && 'card-image-small'}`,
    cardContent: `card-content ${small && 'card-content-small'}`,
  }
};

const CardComponent = ({
  picture,
  name,
  small,
  id,
  showId
}) => {

  /*const getClassNames = useCallback(
    
    () => {
      return {
        card: `card ${small && 'card-small'}`,
        cardImage: `card-image ${small && 'card-image-small'}`,
        cardContent: `card-content ${small && 'card-content-small'}`,
      }
    },
    [small]
  
  );*/
  
  const classNames = useMemo( () => getClassNames(small), [small] );  

  console.log('card render');

  return (
    <div className={classNames.card}>
      
      <img
        src={picture}
        className={classNames.cardImage}
        alt='avatar'
      />
      <div className={classNames.cardContent}>
        <h2>{name.first}</h2>
        <h4>{name.last}</h4>
        {showId && <h5>{id}</h5>}
      </div>


    </div>
  )
}

CardComponent.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }),
  small: PropTypes.bool,
};

/**
 * Мемоизация функционального компонента, аналогично PureComponent
 */
export const Card = memo(CardComponent);




