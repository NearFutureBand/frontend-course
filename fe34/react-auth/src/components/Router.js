import AuthWithAxios from './AuthWithAxios';
import Users from './Users';
import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class Navigator extends Component {

  state = {
    currentPage: 'auth'
  }

  render () {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/users">Users</Link>
          <Link to="/auth">Auth</Link>
        </nav>
        
        <Switch>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/auth">
            <AuthWithAxios />
          </Route>

          <Route path="/">
            <AuthWithAxios />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigator;
