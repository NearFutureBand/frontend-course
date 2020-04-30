import React, { Component } from 'react';
import * as firebase from 'firebase';

import TextInput from '../TextInput';
import Loader from '../Loader';
import './style.css';

// MOCK credentials
// email: email@email.email
// pass: 123456

class SignIn extends Component {

  state = {
    email: '', // поле для ввода имейла
    pincode: '', // поле для ввода пароля
    loading: false, // отвечает за отображение спиннера загрузки
    userUid: null, // идентификатор юзера. Если существует, значит юзер вошел
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.pincode.length === 5 && this.state.pincode.length === 6) {
      console.log('Пинкод введен');
    }
    if (
      this.state.email.length > 6 &&
      this.state.pincode.length === 6 &&
      !this.state.loading &&
      !this.state.userUid
    ) {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pincode)
        .then((response) => {
          if (response.user.uid) {
            // success
            this.setState({
              loading: false,
              userUid: response.user.uid,
            });
          }
        }).catch((error) => {
          console.log(error);
          this.setState({ loading: false });
        });
        this.setState({ loading: true });
    }
  }

  onPincodeChange = (event) => {
    this.setState({ pincode: event.target.value });
  }

  renderLoader = () => {
    if (this.state.loading) {
      return <Loader />
    }
  }

  render() {
    return (
      <div className="sign-in">
        <TextInput
          label="email"
          valueFromProps={this.state.email}
          onChangeFromProps={(event) => { this.setState({ email: event.target.value }) }}
        />
        <TextInput
          label="pincode"
          valueFromProps={this.state.pincode}
          onChangeFromProps={(event) => this.onPincodeChange(event)}
        />
        <button onClick={() => { this.setState({ pincode: '' }) }}>Clear</button>
        { this.state.userUid && (
          <h3>{this.state.userUid}</h3>
        )}
        {this.renderLoader() }
      </div>
    )
  }
}

export default SignIn;
