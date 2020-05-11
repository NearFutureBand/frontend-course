import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Main</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};


export default NavBar;