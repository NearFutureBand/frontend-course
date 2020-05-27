import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';
import { Card } from '../Card';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
      <Link to={ROUTES.SIGNIN}>Sign in</Link>
      <Card
        picture='https://api.adorable.io/avatars/111.png'
        name={{ first: 'Curtis', last: 'Greene' }}
        small
      />
    </nav>
  );
};


export { NavBar };