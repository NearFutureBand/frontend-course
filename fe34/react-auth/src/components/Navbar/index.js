import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';


import { UserCard } from '../UserCard';
import './styles.css';

const Navbar = ({ userData }) => {
  return (
    <nav className="navbar">
      <Link to="/users">Users</Link>
      { userData ? <UserCard picture={userData.picture} name={userData.name} small={true} /> : <Link to="/auth">Auth</Link> }
    </nav>
  )
}

export { Navbar };
