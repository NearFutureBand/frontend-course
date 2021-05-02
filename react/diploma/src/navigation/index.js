import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import MainPage from '../pages/Main';
import UsersPage from '../pages/Users';
import ProfilePage from '../pages/Profile';
import SignInPage from '../pages/SignIn';

import { Navbar } from '../components';
import { ROUTES } from '../constants';

import { signIn } from '../actions';

class Navigator extends Component {

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.signIn({ token });
    }
  }

  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={ROUTES.ME} component={ProfilePage} />
          <Route path={'/users/:index'} component={ProfilePage} />
          <Route path={ROUTES.USERS} component={UsersPage} />
          <Route path={ROUTES.SIGNIN} component={SignInPage} />
          <Route path={ROUTES.MAIN} component={MainPage} />
        </Switch>
      
      </BrowserRouter>
    )
  }
};

export default connect(null, { signIn })(Navigator);