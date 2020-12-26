import axios from 'axios';

import { ACTION_TYPES } from '../const';

/**
 * 1) action creator для экшена изменения пароля. Action - это объект, а
 * ActionCreator - это функция которая возвращает Action. Преимущество функции в том,
 * что есть возможность подкинуть переменную в payload. Поэтому чаще всего используются
 * именно ActionCreator и называют их просто экшенами для сокращения
 * @param {string} value 
 */
export const onChangePassword = (passwordValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PASSWORD,
    payload: passwordValue,
  }
}
export const onChangePhone = (phoneValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PHONE,
    payload: phoneValue,
  }
}

/**
 * 2) Три экшена для каждого из этапов выполнения запроса. При старте
 * будем устанавливать переменную loading в редаксе в true, чтобы потом
 * в компоненте отрисовывать лоадер по этому условию
 */
const signInStart = () =>{
  return {
    type: ACTION_TYPES.SIGN_IN_START,
  }
}

/**
 * 3) В случае успеха передадим объект с данными пользователя в редакс
 * @param {object} userData 
 */
const signInSuccess = (userData) =>{
  return {
    type: ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: userData,
  }
}

/**
 * 4) В случае провала запроса передадим строку с текстом ошибки в редакс
 * @param {string} error 
 */
const signInFailure = (err) => {
  return {
    type: ACTION_TYPES.SIGN_IN_FAILURE,
    payload: err,
  }
}

/**
 * 6) Экшен для процесса логина. На самом деле это ненастоящий actionCreator - это
 * специальная функция, которая возвращает функцию, которая умеет диспатчить другие
 * экшены. Такой маневр позволяет сделать библиотека redux-thunk и она является middleware - 
 * сущностью, которая находится между экшеном и редьюсером и выполняет какую-то дополнительную
 * работу. Какую работу? В нашем случае, в случае с redux-thunk, middleware будет позволять
 * такого рода функциям как наш экшен signIn игнорировать правило что actionCreator обязан
 * возвращать объект экшена. Вместо этого теперь у нас есть возможность вернуть функцию,
 * внутри которой мы уже решим когда и какой экшен нам нужно вызвать 
 * @param {object: {phone?: string, password?: string }} param0 
 */
export const signIn = ({ phone, password, token }) => {
  console.log(phone, password, token);
  // возвращаемая функция принимает dispatch и может быть асинхронной
  return async (dispatch, getState) => {
    // Вот так можно получить что-нибудь из редакса прямо внутри thunk-экшена
    //const phone = getState().auth.phone;
    
    // 1) Запрос начался, выпускаем соответствующий экшен чтобы показать редаксу что мы начали
    dispatch(signInStart());
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone,
        password,
        token
      });

      // 2) Запрос произошел успешно, данные пользователя мы получили,
      // вызываем соответствующий экшен и с его помощью прокидываем
      // response.data в переменную user в редаксе
      dispatch( signInSuccess(response.data) );

      // 3) Дополнительно token сохраняем в localStorage. Вообще по-хорошему это действие
      // нужно выполнять только если юзверь нажал кнопку "запомнить меня",
      // а мы сейчас делаем это вообще всегда при каждом запросе
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      // 4) Запрос произошел с ошибкой, вызываем подходящий экшен и передаем
      // с помощью него в редакс текст ошибки
      console.log('err', err);
      dispatch( signInFailure(err.response.data));
    }
    
  }
}

/**
 * Здесь используются максимально сокращенные формы записи -
 * это thunk-экшн и в конце он диспатчит экшн созданный налету
 */
export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: ACTION_TYPES.SIGN_OUT,
  });
}