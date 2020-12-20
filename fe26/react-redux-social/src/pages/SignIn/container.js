import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onChangePhone, onChangePassword, signIn } from '../../actions';
import './style.css';
import SignInView from './view';

class SignInPageContainer extends Component {

  onChange = (event) => {
    this.props.onChangePhone(event.target.value);
  }

  onSignIn = () => {
    this.props.signIn(this.props.phone, this.props.pass);
  }

  render () {
    return (
      <SignInView
        onChange={this.onChange}
        phone={this.props.phone}
        pass={this.props.pass}
        onChangePassword={this.props.onChangePassword}
        onSignIn={this.props.onSignIn}
      />
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

export default connect(mapStateToProps, actionsCreators )(SignInPageContainer);