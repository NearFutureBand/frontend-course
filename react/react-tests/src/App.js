import axios from 'axios';
import React, { Component } from 'react';

import './App.css';

// +18465683597
class Auth extends Component {

  state = {
    phone: '',
    password: '',
    user: null,
    error: '',
    loading: false
  }

  passwordInputRef = React.createRef(null);

  login = async () => {
    const { phone } = this.state;
    const password = this.passwordInputRef?.current.value;
    console.log({ phone, password });
    
    this.setState({ loading: true });
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone, password
      });
      console.log(response);

      this.setState({ user: response.data, loading: false });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.response.data, loading: false });
    }
    
  }

  onChangePhone = (value) => {
    this.setState({ phone: value });
  }

  onChangePassword = () => {
    this.setState({ password: this.passwordInputRef.current.value });
  }

  render () {
    return (
      <div className="page">
        <h1 data-qa="authenticationLabel">AUTHENTICATION</h1>
        
        {this.state.user && (
          <span data-qa="greeting">Hello, {this.state.user.name.first} {this.state.user.name.last}</span>
        )}

        <input
          data-qa="input-phone"
          type="text"
          placeholder="phone"
          onChange={(event) => this.onChangePhone(event.target.value)}
          value={this.state.phone}
        />
        <input
          data-qa="input-password"
          type="text"
          placeholder="password"
          ref={this.passwordInputRef}
          onChange={this.onChangePassword}
          value={this.state.password}
        />
        
        <button onClick={this.login} id="login">Login</button>
        {this.props.errors && <span>{this.state.errors}</span>}

        {/*this.props.user && (
          <Redirect
            to={{
              pathname: "/users"
            }}
          />
        )*/}
        {this.state.loading && <span>Loading...</span>}

      </div>
    );
  }
}

export default Auth;