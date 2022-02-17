export const ROUTES = {
  MAIN: '/',
  USERS: '/users',
  SIGNIN: '/sign-in',
  PROFILE: '/profile',
}


/**
 * Объект-перечисление для хранения типов экшенов. Так мы инкапсулируем строковые
 * значения и даем возможность безопасно их использовать в любом месте проекта.
 * Опасность здесь в том, что при указании типа экшена строкой можно допустить опечатку
 * и это чревато неожиданным поведением экшенов или редьюсеров. Поэтому создается константа
 * и работа идет только со свойствами этой константы. Плюс ее можно экспортировать и
 * использовать где угодно. Как минимум эти вещи нам нужны в двух местах - в папке с 
 * экшенами и в папке с редьюсерами
 */
export const ACTION_TYPES = {
  
  // users
  GET_USERS_START: 'GET_USERS_START',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAILURE: 'GET_USERS_FAILURE',
  SORT_USERS_BY_NAME: 'SORT_USERS_BY_NAME',

  // auth
  ON_CHANGE_PHONE: 'ON_CHANGE_PHONE',
  ON_CHANGE_PASSWORD: 'ON_CHANGE_PASSWORD',
  SIGN_IN_START: 'SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  SIGN_OUT: 'SIGN_OUT',

  // profile
  GET_USER_START: 'GET_USER_START',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAILURE: 'GET_USER_FAILURE',
}