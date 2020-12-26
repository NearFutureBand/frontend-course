/**
 * 1) Этот компонент - тот же самый компонент аутентификации, только
 * здесь в качестве бэкенда выступает приложение, созданное в Firebase
 *  */ 

/**
 * 2) Для связи с веб-приложения с firebase нужна соответствующая npm-библиотека 
 */
import firebase from 'firebase';
import React, { Component } from 'react';

/**
 * 3) Это объект конфигурации. Все эти вещи выдаются на странице приложения
 * Firebase и нужны для того, чтобы ваше веб-приложение знало куда именно
 * стучаться (слать запросы), а также чтобы Firebase был в курсе существования
 * веб-клиента, который с ним работает.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCgyX4v6FEpj5lI-WQ84sbu1jryP57gjUA",
  authDomain: "react-auth-c5d31.firebaseapp.com",
  databaseURL: "https://react-auth-c5d31.firebaseio.com",
  projectId: "react-auth-c5d31",
  storageBucket: "react-auth-c5d31.appspot.com",
  messagingSenderId: "893658284865",
  appId: "1:893658284865:web:2bc2ca3d9c992094dad7c0",
  measurementId: "G-NW73LXPNNS"
};

class App extends Component {

  state = {
    email: '',
    password: '',
    user: null
  }

  componentDidMount = () => {
    /**
     * 4) Здесь происходит вызов функции, которая настраивает приватный
     * канал связи для общения нашего веб-приложения с сервером Firebase. Точнее
     * с нашим приложением Firebase, которое было там создано
     */
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.password.length === 5 &&
      this.state.password.length === 6 &&
      this.state.email.length !== ''
    ) {
      this.login();
    }
  }

  login = async () => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password);
    this.setState({ user: response.user, email: '', password: '' });
  }

  render () {
    return (
      <div className="page">
        <div className="page-sign-in">
          {this.state.user && (
            <span>Hello {this.state.user.uid}</span>
          )}
          <input
            type="text"
            placeholder="email"
            onChange={(event) => this.setState({ email: event.target.value })}
            value={this.state.email}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(event) => this.setState({ password: event.target.value })}
            value={this.state.password}
          />
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}

export default App;
