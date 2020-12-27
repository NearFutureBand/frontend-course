import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.css';

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
class UserCard extends PureComponent {

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

/**
 * Библиотека propTypes используется для описания типов пропсов.
 * Применяется, когда в проекте нет TypeScript
 */
UserCard.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }).isRequired,
  small: PropTypes.bool,
};

UserCard.defaultProps = {
  small: false
}

export { UserCard };