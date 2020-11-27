import React, { Component } from 'react';
import { comment, connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Navbar } from '../components';
import { Users, Profile, Auth } from '../pages';
import { login } from '../actions';

class Navigator extends Component {

  state = {
    userData: null
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.login({ token });
    }
  }

  setUserData = (userData) => {
    console.log(userData);
    this.setState({ userData });
  }

  render () {
    return (
      <BrowserRouter>
        <Navbar userData={this.state.userData} /> 
        
        <Switch>
          <Route
            path="/users/:index"
            component={Profile}
          />

          <Route path="/users" component={Users} />

          <Route path="/">
            <Auth setUserData={this.setUserData} />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { login } )(Navigator);
