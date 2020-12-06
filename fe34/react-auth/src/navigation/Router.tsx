import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { Navbar } from '../components';
import { Users, Profile, Auth } from '../pages';
import { login } from '../actions';

interface IProps {
  login: (param: { token: string }) => void;
}

class Navigator extends Component<IProps> {

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.login({ token });
    }
  }

  render () {
    return (
      <BrowserRouter>
        <Navbar /> 
        
        <Switch>
          <Route
            path="/users/:index"
            component={Profile}
          />

          <Route path="/users" component={Users} />

          <Route path="/">
            <Auth />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { login } )(Navigator);
