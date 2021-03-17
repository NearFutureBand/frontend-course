import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';
import './style.css';

export const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
      <Link to={ROUTES.SIGNIN}>Sign in</Link>
    </nav>
  );
};