import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../actions';
import { ROUTES } from '../../const';
import { Card } from '../Card';
import './style.css';

/**
 * 1) Обычный функциональный компонент, которому нужен доступ к данным пользователя
 * в редаксе. Здесь они используются чтобы после успешного логина скрыть кнопку
 * Auth из навбара и показать карточку с аватаркой аутентифицированного юзера
 */
export const Navbar = () => {

  /**
   * 2) useSeelector - если нужен доступ к переменной из редакса
   * внутри useSeleector указывается функция с путем к свойству в объекте стейта редакса.
   * Так как используется несколько редьюсеров, то нужно не забывать про имя модуля auth,
   * которое было нами придумано в функции combineReducers. Дальше идет свойство user - оно
   * как и раньше берется из initialState
   */
  const token = useSelector(state => state.auth.token);
  const avatar = useSelector(state => state.auth.user?.picture);
  const name = useSelector(state => state.auth.user?.name);

  /**
   * 3) Хук useDispatch используется для того чтобы получить функцию,
   * которая будет запускать экшены. В dispatch нужно просто передать
   * объект экшена
   */
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <Link to={ROUTES.MAIN}>Main</Link>
      <Link to={ROUTES.USERS}>Users</Link>
      { token ? (
        <>
          <Card
            picture={avatar}
            name={name}
            small
          />
          <button onClick={() => dispatch(signOut())}>Sign out</button>
        </>
      ) : (
        <Link to={ROUTES.SIGNIN}>Sign in</Link>
      )}
    </nav>
  );
};