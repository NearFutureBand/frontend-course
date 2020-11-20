import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Navbar } from '../components';
import { Users, Profile, Auth } from '../pages';

class Navigator extends Component {

  state = {
    userData: null
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

export default Navigator;
