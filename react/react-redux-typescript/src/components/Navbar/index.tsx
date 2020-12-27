import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  Link
} from 'react-router-dom';

import { UserCard } from '../UserCard';
import './styles.css';
import { IStore } from '../../types/interfaces';

const Navbar: FC = () => {

  const userData = useSelector( (state: IStore) => state.auth.user);

  return (
    <nav className="navbar">
      <Link to="/users">Users</Link>
      { userData ? <UserCard picture={userData.picture} name={userData.name} small={true} /> : <Link to="/auth">Auth</Link> }
    </nav>
  )
}

export { Navbar };
