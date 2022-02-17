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
    const { phone, pass } = this.props;
    this.props.signIn({ phone, password: pass });
  }

  render () {
    return (
      <SignInView
        onChange={this.onChange}
        phone={this.props.phone}
        pass={this.props.pass}
        onChangePassword={this.props.onChangePassword}
        onSignIn={this.onSignIn}
        isSignedIn={this.props.isSignedIn}
      />
    )
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
    pass: state.auth.password,
    isSignedIn: !!state.auth.token,
  }
}

/**
 * 4) Чтобы компонент понимал, что наши экшены это не просто обычные функции, а именно
 * экшены которые нужно диспатчить ( прокидывать в редьюсер), то их также нужно "обработать"
 * и подключить с помощью connect. Для этого организуется объект, в котором достаточно
 * перечислить наши экшены, с которыми компонент будет работать. И после этого эти экшены
 * появятся в пропсах у компонента ( пример : this.props.phoneChangeAction)
 */ 
const actionsCreators = {
  onChangePhone,
  onChangePassword,
  signIn,
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
export default connect(mapStateToProps, actionsCreators )(SignInPageContainer);