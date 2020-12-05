import { combineReducers } from 'redux';

import { IAuthState, IStore, IUsersState } from '../types/interfaces';

// 1) Импортируем все редьюсеры, которые у нас есть
import AuthReducer from './authReducer';
import UsersRedcuer from './usersReducer';

/**
 * 2) Несколько редьюсеров объединяются в один с помощью функции
 * combineReducers. Несколько редьюсеров позволяют разбить стейт редакса
 * на независимые модули, чтобы не городить тонну переменных в одном редьюсере.
 * combineReducers принимает объект в котором свойства это
 * названия для модулей стейта, а значения - редьюсеры
*/
export default combineReducers({
  auth: AuthReducer,
  users: UsersRedcuer,
});


