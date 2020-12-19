import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
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

/**
 * Если mapStateToProps не нужен ( или тоже самое  - если не нужны какие-либо
 * переменные из редакса), то в connect первым аргументом передается null
 */
export default connect(null, { login } )(Navigator);
