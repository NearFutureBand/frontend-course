import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ROUTES } from '../../const';
import { Card } from '../Card';
import './style.css';

class NavBarComponent extends Component {

  render () {
    return (
      <nav className="navbar">
        <Link to={ROUTES.MAIN}>Main</Link>
        <Link to={ROUTES.USERS}>Users</Link>
        { this.props.token ? (
          <Card
            picture={this.props.avatar}
            name={this.props.name}
            small
          />
        ) : (
          <Link to={ROUTES.SIGNIN}>Sign in</Link>
        )}
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    avatar: state.auth.user?.picture,
    name: state.auth.user?.name,
  }
}

const NavBar = connect(mapStateToProps)(NavBarComponent);
export { NavBar };