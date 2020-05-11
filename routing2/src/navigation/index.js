import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from '../components/NavBar';
import MainPage from '../pages/Main';
import UsersPage from '../pages/Users';

export default Navigator = () => {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};