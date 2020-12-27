
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { passwordChangeActionCreator, phoneChangeAction, login } from '../../actions';
import './styles.css';
import { IUser, IStore } from '../../types/interfaces';

interface IProps {
  user: IUser | null;
  phone: string;
  password: string;
  errors: string;
  loading: boolean;
  phoneChangeAction: (value: string) => void;
  passwordChangeActionCreator: (value: string) => void;
  login: (param: { phone: string, password: string}) => void;
}

class Auth extends Component<IProps> {

  componentWillUnmount = (): void => {
    console.log('Auth unmounted');
  }

  login = (): void => {
    this.props.login({ phone: this.props.phone, password: this.props.password });
  }

  onChangePhone = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.phoneChangeAction(event.target.value)
  }

  render () {
    return (
      <div className="page">
        <h1>AUTHENTICATION</h1>
        {this.props.user && (
          <span>Hello {this.props.user.name.first}</span>
        )}
        <input
          type="text"
          placeholder="phone"
          onChange={this.onChangePhone}
          value={this.props.phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => this.props.passwordChangeActionCreator(event.target.value)}
          value={this.props.password}
        />
        
        <button onClick={this.login}>Login</button>
        {this.props.errors && <span>{this.props.errors}</span>}

        {/*this.props.user && (
          <Redirect
            to={{
              pathname: "/users"
            }}
          />
        )*/}
        {this.props.loading && <span>Loading...</span>}

      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    phone: state.auth.phone,
    password: state.auth.password,
    user: state.auth.user,
    errors: state.auth.errors,
    loading: state.auth.loading,
    users: state.users.users
  }
}

const actions = {
  passwordChangeActionCreator,
  phoneChangeAction,
  login
}

export default connect  (mapStateToProps, actions )   (Auth);