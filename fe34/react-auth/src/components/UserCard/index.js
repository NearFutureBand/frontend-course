import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class UserCard extends PureComponent {

  render () {
    const classNames = {
      card: `card ${this.props.small ? 'card-small' : ''}`,
      cardImage: `card-image ${this.props.small ? 'card-image-small' : ''}`,
      cardContent: `card-content ${this.props.small ? 'card-content-small' : ''}`,
    }
  
    console.log('card render');
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