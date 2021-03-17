import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { ROUTES } from '../../const';
import './style.css';

class SignInPageContainer extends Component {

  state = {
    phone: '',
    password: '',
    user: null,
    error: ''
  }

  componentDidMount = () => {
    console.log('mounted');
  }

  componentWillUnmount = () => {
    console.log('unmounted');
  }

  onLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone: this.state.phone,
        password: this.state.password
      });
      this.setState({ user: response.data, phone: '', password: '' });
      this.props.history.push(ROUTES.MAIN);
    } catch (err) {
      console.log(err.response);
      this.setState({ error: err.response.data });
    }
  }

  onChangeCredentials = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value, error: '' });
  }

  render() {
    return (
      <div className="page">
        <div className="page-sign-in">
          <input
          type="text"
          placeholder="phone number"
          onChange={(event) => this.onChangeCredentials(event, 'phone')}
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.onChangeCredentials(event, 'password')}
          value={this.state.password}
        />
        <div>
          {this.state.user && (
            <span>{this.state.user.name.first} {this.state.user.name.last}</span>
          )}
        </div>
          <span className="text-field error-text">{this.state.error}</span>
          <button onClick={this.onLogin}>Sign in</button>
        </div>
        {this.state.user !== null && <Redirect to={ROUTES.MAIN} />}
      </div>
    )
  }
}

export default SignInPageContainer;