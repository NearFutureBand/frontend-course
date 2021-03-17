import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Card = ({
  picture,
  name,
  small,
  id,
  showId
}) => {

  const getClassNames = () => {
    return {
      card: `card ${small && 'card-small'}`,
      cardImage: `card-image ${small && 'card-image-small'}`,
      cardContent: `card-content ${small && 'card-content-small'}`,
    }
  }
  
  // Пример мемоизации переменной в функциональном компоненте
  const classNames = getClassNames()

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

/**
 * Библиотека propTypes используется для описания типов пропсов.
 * Применяется, когда в проекте нет TypeScript
 */
Card.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }),
  small: PropTypes.bool,
};


export { Card };