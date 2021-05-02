import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../actions';
import { ROUTES } from '../../constants';
import { Card } from '../Card';
import './style.css';

export const Navbar = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);
  const avatar = useSelector(state => state.auth.user?.picture);
  const name = useSelector(state => state.auth.user?.name);

  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
      { token ? (
        <>
          <Card
            picture={avatar}
            name={name}
            small
          />
          <button onClick={() => dispatch(signOut())}>Sign out</button>
        </>
      ) : (
        <Link to={ROUTES.SIGNIN}>Sign in</Link>
      )}
    </nav>
  );
};