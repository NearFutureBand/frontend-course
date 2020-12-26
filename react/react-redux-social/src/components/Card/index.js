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

  // Пример функции, созданной через хук useCallback
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
  
  // Пример мемоизации переменной в функциональном компоненте
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

/**
 * Библиотека propTypes используется для описания типов пропсов.
 * Применяется, когда в проекте нет TypeScript
 */
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



// КЛАССОВЫЙ КОМПОНЕНТ
/**
 * PureComponent используется для оптимизации компонента - чтобы лишний
 * раз у него не вызывался рендер. Если родительский компонент переррисовывается,
 * то это вызывает перерисовку дочерних компонентов. Даже если у них не менялись
 * ни стейт, ни пропсы.
 * 
 * !!! Когда мы точно знаем что при перерисовке родительского компонента, дочерний
 * компонент остается неизменным (не меняются стейт или пропсы) и его перерисовка
 * не требуется, тогда его нужно унаследовать от PureComponent.
 * 
 * Для классовых компонентов используется класс PureComponent, для функциональных -
 * HOC memo ( https://ru.reactjs.org/docs/react-api.html ) 
 */

/* class UserCard extends PureComponent {

  render () {
    const classNames = {
      card: `card ${this.props.small ? 'card-small' : ''}`,
      cardImage: `card-image ${this.props.small ? 'card-image-small' : ''}`,
      cardContent: `card-content ${this.props.small ? 'card-content-small' : ''}`,
    }
  
    return (
      <div className={classNames.card}>
        <img
          src={this.props.picture}
          className={classNames.cardImage}
          alt='avatar'
        />
        <div className={classNames.cardContent}>
          <h2>{this.props.name.first}</h2>
          <h4>{this.props.name.last}</h4>
        </div>
      </div>
    )
  }
}
*/


