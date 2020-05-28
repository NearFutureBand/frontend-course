import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onChangePhone, onChangePassword, signIn } from '../../actions';
import './style.css';

class SignInPage extends Component {

  onChange = (event) => {
    this.props.onChangePhone(event.target.value);
  }

  onSignIn = () => {
    this.props.signIn(this.props.phone, this.props.pass);
  }

  render () {
    return (
      <div className="page">
        <div className="page-sign-in">
          <input
            type="text"
            placeholder="phone"
            onChange={this.onChange}
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
          <button onClick={this.onSignIn}>Sign in</button>
        </div>
      </div>
    )
  }
}

// стейт редакса в пропсы компонента
const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone,
    pass: state.auth.password,
  }
}

const actionsCreators = {
  onChangePhone,
  onChangePassword,
  signIn,
}

export default connect(mapStateToProps, actionsCreators )   (SignInPage);