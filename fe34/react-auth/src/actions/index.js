import axios from 'axios';

/**
 * 1) Объект-перечисление для хранения типов экшенов. Так мы инкапсулируем строковые
 * значения и даем возможность безопасно их использовать в любом месте проекта.
 * Опасность здесь в том, что при указании типа экшена строкой можно допустить опечатку
 * и это чревато неожиданным поведением экшенов или редьюсеров. Поэтому создается константа
 * и работа идет только со свойствами этой константы. Плюс ее можно экспортировать и
 * использовать где угодно. Как минимум эти вещи нам нужны в двух местах - в папке с 
 * экшенами и в папке с редьюсерами
 */
export const actionTypes = {
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_PHONE: 'CHANGE_PHONE',
  SET_USER_DATA: 'SET_USER_DATA',
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
}

/**
 * 2) action creator для экшена изменения пароля. Action - это объект, а
 * ActionCreator - это функция которая возвращает Action. Преимущество функции в том,
 * что есть возможность подкинуть переменную в payload. Поэтому чаще всего используются
 * именно ActionCreator и называют их просто экшенами для сокращения
 * @param {string} value 
 */
export const passwordChangeActionCreator = (value) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload: value
  }
}
export const phoneChangeAction = (value) => ({
  type: actionTypes.CHANGE_PHONE,
  payload: value
});

/**
 * 3) Три экшена для каждого из этапов выполнения запроса. При старте
 * будем устанавливать переменную loading в редаксе в true, чтобы потом
 * в компоненте отрисовывать лоадер по этому условию
 */
const loginStart = () => ({
  type: actionTypes.LOGIN_START,
});

/**
 * 4) В случае успеха передадим объект с данными пользователя в редакс
 * @param {object} userData 
 */
const loginSuccess = (userData) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: userData
});

/**
 * 5) В случае провала запроса передадим строку с текстом ошибки в редакс
 * @param {string} error 
 */
const loginFailure = (error) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error,
});

/**
 * 6) Экшен для процесса логина. На самом деле это ненастоящий actionCreator - это
 * специальная функция, которая возвращает функцию, которая умеет диспатчить другие
 * экшены. Такой маневр позволяет сделать библиотека redux-thunk и она является middleware - 
 * сущностью, которая находится между экшеном и редьюсером и выполняет какую-то дополнительную
 * работу. Какую работу? В нашем случае, в случае с redux-thunk, middleware будет позволять
 * такого рода функциям как наш экшен login игнорировать правило что actionCreator обязан
 * возвращать объект экшена. Вместо этого теперь у нас есть возможность вернуть функцию,
 * внутри которой мы уже решим когда и какой экшен нам нужно вызвать 
 * @param {object: {phone?: string, password?: string, token?: string}} param0 
 */
export const login = ({ phone, password, token }) => {
  // возвращаемая функция принимает dispatch и может быть асинхронной
  return async (dispatch) => {
    try {
      // 1) Запрос начался, выпускаем соответствующий экшен чтобы показать редаксу что мы начали
      dispatch(loginStart());

      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone,
        password,
        token
      });

      // 2) Запрос произошел успешно, данные пользователя мы получили,
      // вызываем соответствующий экшен и с его помощью прокидываем
      // response.data в переменную user в редаксе
      dispatch(loginSuccess(response.data));

      // 3) Дополнительно token сохраняем в localStorage. Вообще по-хорошему это действие
      // нужно выполнять только если юзверь нажал кнопку "запомнить меня",
      // а мы сейчас делаем это вообще всегда при каждом запросе
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      // 4) Запрос произошел с ошибкой, вызываем подходящий экшен и передаем
      // с помощью него в редакс текст ошибки
      dispatch(loginFailure(err.response.data));
    }
  }
}
