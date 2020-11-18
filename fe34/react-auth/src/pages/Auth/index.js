import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './styles.css';

class App extends Component {

  state = {
    phone: '',
    password: '',
    user: null,
    errors: '',
  }

  login = async () => {
    const { password, phone } = this.state;

    /*axios.post('http://localhost:3001/auth/sign-in', {
      phone: this.state.phone,
      password
    }).then((result) => {
      this.setState({ user: result.data });
    }).catch((err) => {
      this.setState({ errors: err.response.data });
    });*/

    try {
      const result = await axios.post('http://localhost:3001/auth/sign-in', {
        phone: phone,
        password
      });
      this.setState({ user: result.data });
    } catch (err) {
      this.setState({ errors: err.response.data });
    }
  }

  componentWillUnmount = () => {
    console.log('Auth unmounted');
  }

  render () {
    return (
      <div className="page">
        <h1>AUTHENTICATION</h1>
        {this.state.user && (
          <span>Hello {this.state.user.name.first}</span>
        )}
        <input
          type="text"
          placeholder="phone"
          onChange={(event) => this.setState({ phone: event.target.value, errors: '' })}
          value={this.state.phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.setState({ password: event.target.value, errors: '' })}
          value={this.state.password}
        />
        
        <button onClick={this.login}>Login</button>
        {this.state.errors && <span>{this.state.errors}</span>}

        {this.state.user && (
          <Redirect
            to={{
              pathname: "/users"
            }}
          />
        )}
        
      </div>
    );
  }
}

export default App;
