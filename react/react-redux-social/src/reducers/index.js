import { combineReducers } from 'redux';

// 1) Импортируем все редьюсеры, которые у нас есть
import AuthReducer from  './AuthReducer';
import UsersReducer from './UsersReducer';
import ProfileReducer from './ProfileRreducer';

/**
 * 2) Несколько редьюсеров объединяются в один с помощью функции
 * combineReducers. Несколько редьюсеров позволяют разбить стейт редакса
 * на независимые модули, чтобы не городить тонну переменных в одном редьюсере.
 * combineReducers принимает объект в котором свойства это
 * названия для модулей стейта, а значения - редьюсеры
*/
export default combineReducers({
  auth: AuthReducer,
  users: UsersReducer,
  profile: ProfileReducer,
});
