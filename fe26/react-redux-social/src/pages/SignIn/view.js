import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SignInView extends Component {
  render () {
    return (
      <div className="page">
        <div className="page-sign-in">
          <input
            type="text"
            placeholder="phone"
            onChange={this.props.onChange}
            value={this.props.phone}
          />
          {<span className="text-field error-text">Error text</span>}
          <input
            type="text"
            placeholder="password"
            value={this.props.pass}
            onChange={event => this.props.onChangePassword(event.target.value)}
          />
          {<span className="text-field error-text">Error text</span>}
          <button onClick={this.props.onSignIn}>Sign in</button>
        </div>
      </div>
    )
  }
}

SignInView.propTypes = {
  onChange: PropTypes.func,
  phone: PropTypes.string,
  pass: PropTypes.string,
  onChangePassword: PropTypes.func,
  onSignIn: PropTypes.func,
}

export default SignInView;