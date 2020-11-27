import axios from 'axios';
import { useDispatch, useSelector, connect } from 'react-redux'; // 1) Импортируем connect для подсоединения классового компонента к редаксу и скроллим в самый низ 
import React, { useEffect, Component } from 'react';
import { Redirect } from 'react-router-dom';

// 1)
import { passwordChangeActionCreator, phoneChangeAction, login } from '../../actions';
import './styles.css';

// здесь закомменченный функциональный компонент
/*const Auth = () => {

  const phone = useSelector( state => state.phone );
  const password = useSelector( state => state.password );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('did mount');
  }, []);

  useEffect(() => {
    if (password.length === 3 && phone.length !== 0) {
      console.log('login');
    }
  }, [password, phone]);

  const onChangePassword = (event) => {
    dispatch(
      passwordChangeActionCreator(event.target.value)
    );
  };

  const onChangePhone = (event) => {
    dispatch(phoneChangeAction(event.target.value));
  }

  return (
    <div className="page">
      <h1>AUTHENTICATION</h1>
      <input
        type="text"
        placeholder="phone"
        //onChange={(event) => this.setState({ phone: event.target.value, errors: '' })}
        onChange={onChangePhone}
        value={phone}
      />
      <input
        type="text"
        placeholder="password"
        //onChange={(event) => this.setState({ password: event.target.value, errors: '' })}
        onChange={onChangePassword}
        value={password}
      />
      
    </div>
  );
}*/


class Auth extends Component {

  componentWillUnmount = () => {
    console.log('Auth unmounted');
  }

  /**
   * Просто вызов экшена login по клику. Передаем переменные с номером телефона
   * и паролем. Здесь можно провести хорошую оптимизацию - напомните на след. занятии! (*)
   */
  login = () => {
    this.props.login({ phone: this.props.phone, password: this.props.password });
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
          onChange={(event) => this.props.phoneChangeAction(event.target.value)}
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

/**
 * 3) Это функция которая преобразует нужные нам переменные из редакса в пропсы нашего
 * компонента. Эта функция по соглашению всегд называется mapStateToProps. Она принимает
 * объект со всем что хранится в редаксе ( точно также как и useSelector) и возвращает
 * объект. В возвращаемом объекте ключи это имена наших будущих пропсов, а значения - 
 * путь к переменной в стейте редакса (опять же точно также как в useSelector)
 * @param {object} state 
 */
const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone,
    password: state.auth.password,
    user: state.auth.user,
    errors: state.auth.errors,
    loading: state.auth.loading,
    users: state.users.users
  }
}

/**
 * 4) Чтобы компонент понимал, что наши экшены это не просто обычные функции, а именно
 * экшены которые нужно диспатчить ( прокидывать в редьюсер), то их также нужно "обработать"
 * и подключить с помощью connect. Для этого организуется объект, в котором достаточно
 * перечислить наши экшены, с которыми компонент будет работать. И после этого эти экшены
 * появятся в пропсах у компонента ( пример : this.props.phoneChangeAction)
 */ 
const actions = {
  passwordChangeActionCreator,
  phoneChangeAction,
  login
}

/**
 * 2) connect вызывается с двумя парами круглых скобок ( это функция которая возвращает
 * функцию, но здесь мы вызываем их обеих сразу). Во второй паре скобок должен находиться
 * компонент, в первой - два параметра. Дальше в пункты 3 и 4.
 * 
 * 5) mapStateToProps и объект с экшенами нужно передать в первую пару скобок функции
 * connect. Если переменные из редакса компоненту не нужны, а какие-либо экшены нужны, то
 * тогда вместо mapStateToProps нужно написать null ( см. пример в файле  navigation/Router.js )
 */
export default connect  (mapStateToProps, actions )   (Auth);