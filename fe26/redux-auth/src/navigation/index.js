import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from '../pages/Main';
import UsersPage from '../pages/Users';
import ProfilePage from '../pages/Profile';
import SignInPage from '../pages/SignIn';

import { NavBar } from '../components';
import { ROUTES } from '../const';

import { autoSignIn } from '../actions';

class Navigator extends Component {

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.autoSignIn(token);
    }
  }

  render () {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={'/users/:index'} component={ProfilePage} />
          <Route path={ROUTES.USERS} component={UsersPage} />
          <Route path={ROUTES.SIGNIN} component={SignInPage} />
          <Route path={ROUTES.MAIN} component={MainPage} />
        </Switch>
      
      </BrowserRouter>
    )
  }
};

export default connect(null, { autoSignIn })(Navigator);