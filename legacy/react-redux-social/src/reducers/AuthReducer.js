import { ACTION_TYPES } from '../const';

/**
 * 1) Здесь начальное состояние для страницы Auth. Все переменные
 * которые раньше лежали в локальном стейте Auth переехали сюда. Первое что нужно
 * зделать чтобы компонент работал с редаксом - это создать состояние в редаксе
 * для этого компонента
 */
const initialState = {
  phone: '', // значение инпута для ввода номера телефона
  password: '', // значение инпута для ввода пароля
  user: null, // переменная для хранения данных залогиненного пользователя
  token: null, // переменная для хранения токена
  errors: '', // переменная для вывода ошибок при аутентификации
  loading: false, // переменная для отображения анимации загрузки при выполнении запросов
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    /**
     * 2) Экшены ON_CHANGE_PHONE и ON_CHANGE_PASSWORD просто устанавливают
     * значение phone и password получая value из соответствующих инпутов
     * в компоненте
     */
    case ACTION_TYPES.ON_CHANGE_PHONE: {
      return {
        ...state,
        phone: action.payload,
      }
    }
    case ACTION_TYPES.ON_CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      }
    }

    /**
     * 3) Три экшена для трех этапов процесса логина. При старте включаем лоадер,
     * при успехе или ошибке его выключаем. При успехе, также, кладем в редакс данные
     * пользователя из action.payload. А в action.payload они потому, что этот экшен
     * вызывается после выполнения запроса на логин и передает сюда данные пользователя,
     * которые возвращает запрос. В случае неуспешного запроса на логин сетаем в редакс
     * строку с текстом ошибки. После этого текст ошибки отобразится в компоненте
     */
    case ACTION_TYPES.SIGN_IN_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTION_TYPES.SIGN_IN_SUCCESS: {

      return {
        ...state,
        ...initialState,
        user: action.payload,
        token: action.payload.token,
        loading: false,
      }
    }
    case ACTION_TYPES.SIGN_IN_FAILURE: {
      return {
        ...state,
        loading: false
      }
    }

    // Если нужно сбросить сразу много значений, можно
    // вернуть initialState
    case ACTION_TYPES.SIGN_OUT: {
      return initialState;
    }

    default: return state
  }
}