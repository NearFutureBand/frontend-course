import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from '../components/NavBar';
import MainPage from '../pages/Main';
import UsersPage from '../pages/Users';
import ProfilePage from '../pages/Profile';

export default Navigator = () => {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/users/:index' component={ProfilePage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/' component={MainPage} />
      </Switch>
    </Router>
  );
};