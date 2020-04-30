import React, { Component } from 'react';
import * as firebase from 'firebase';

import TextInput from '../TextInput';
import Loader from '../Loader';
import './style.css';

// MOCK credentials
// email: email@email.email
// pass: 123456
// email: test@test.test
// pass: 111000

class SignIn extends Component {

  state = {
    email: '', // поле для ввода имейла
    pincode: '', // поле для ввода пароля
    loading: false, // отвечает за отображение спиннера загрузки
    userUid: null, // идентификатор юзера. Если существует, значит юзер вошел
    error: '', // переменная для ошибки которая можно произойти при входе
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      this.state.email.length > 6 &&
      this.state.pincode.length === 6 &&
      !this.state.loading &&
      !this.state.userUid
    ) {
      this.signIn();
    }
  }

  signIn = () => {
    // запрос еще не начался
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pincode)
    .then((response) => {
      if (response.user.uid) {
        // запрос пришел и он успешный
        this.setState({
          loading: false,
          userUid: response.user.uid,
        });
      }
    }).catch((error) => {
      // запрос пришел и он с ошибкой
      console.log(error);
      this.setState({
        loading: false,
        error: error.message,
        email: '',
        pincode: '',
      });
    });
    // запрос уже начался
    this.setState({ loading: true, error: '' });
  }

  onPincodeChange = (event) => {
    this.setState({ pincode: event.target.value });
  }

  renderLoader = () => {
    if (this.state.loading) {
      return <Loader />
    }
  }

  onClearClick = () => {
    this.setState({
      email: '',
      pincode: '',
      error: '',
    });
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
        <button onClick={this.onClearClick}>Clear</button>
        {this.state.userUid && (
          <h3>{this.state.userUid}</h3>
        )}
        {this.state.error && (
          <h4>{this.state.error}</h4>
        )}
        {this.renderLoader()}
      </div>
    )
  }
}

export default SignIn;
