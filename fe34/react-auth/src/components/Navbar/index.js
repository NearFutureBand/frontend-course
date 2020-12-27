import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link
} from 'react-router-dom';

import { UserCard } from '../UserCard';
import './styles.css';

/**
 * 1) Обычный функциональный компонент, которому нужен доступ к данным пользователя
 * в редаксе. Здесь они используются чтобы после успешного логина скрыть кнопку
 * Auth из навбара и показать карточку с аватаркой аутентифицированного юзера
 */
const Navbar = () => {

  // 2) useSeelector - если нужен доступ к переменной из редакса
  // внутри useSeleector указывается функция с путем к свойству в объекте стейта редакса.
  // Так как используется несколько редьюсеров, то нужно не забывать про имя модуля auth,
  // которое было нами придумано в функции combineReducers. Дальше идет свойство user - оно
  // как и раньше берется из initialState
  const userData = useSelector( state => state.auth.user);

  return (
    <nav className="navbar">
      <Link to="/users">Users</Link>
      { userData ? <UserCard picture={userData.picture} name={userData.name} small={true} /> : <Link to="/auth">Auth</Link> }
    </nav>
  )
}

export { Navbar };
