import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Main</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

NavBar.propTypes = {
  user: PropTypes.oneOfType([PropTypes.instanceOf(null), PropTypes.object]),
};

export default NavBar;