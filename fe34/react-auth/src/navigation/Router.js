import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Navbar } from '../components';

import Auth from '../pages/Auth';
import Users from '../pages/Users';
import Profile from '../pages/Profile';

class Navigator extends Component {

  render () {
    return (
      <BrowserRouter>
        <Navbar />
        
        <Switch>

          <Route path="/users/:index" component={Profile} />

          <Route path="/users" component={Users} />

          <Route path="/auth">
            <Auth />
          </Route>

          <Route path="/">
            <Auth />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigator;
