import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Auth from '../pages/Auth';
import Users from '../pages/Users';
import Profile from '../pages/Profile';

class Navigator extends Component {

  render () {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/users">Users</Link>
          <Link to="/auth">Auth</Link>
        </nav>
        
        <Switch>

          <Route path="/users/:index" render={(props) => <Profile {...props}/>}/>

          <Route path="/users">
            <Users />
          </Route>

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
