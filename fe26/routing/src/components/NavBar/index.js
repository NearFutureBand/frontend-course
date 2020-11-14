import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link to="/">Main</Link>
      {user?.uid ? (
        <span>{`Hello, ${user.displayName}`}</span>
      ) : (
          <Link to="/sign-in">Sign In</Link>
        )}
      <Link to="/counter">Counter</Link>
    </nav>
  );
};

NavBar.propTypes = {
  user: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.object]),
};

export default NavBar;