import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/users">Users</Link>
      <Link to="/auth">Auth</Link>
    </nav>
  )
}

export { Navbar };
