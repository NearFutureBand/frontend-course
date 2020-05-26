import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
    </nav>
  );
};


export { NavBar };