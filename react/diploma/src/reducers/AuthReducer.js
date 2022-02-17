import { ACTION_TYPES } from '../constants';

const initialState = {
  phone: '', // значение инпута для ввода номера телефона
  password: '', // значение инпута для ввода пароля
  user: null, // переменная для хранения данных залогиненного пользователя
  token: null, // переменная для хранения токена
  errors: '', // переменная для вывода ошибок при аутентификации
  loading: false, // переменная для отображения анимации загрузки при выполнении запросов
};

const reducer =  (state = initialState, action) => {
  switch (action.type) {
    
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

    case ACTION_TYPES.SIGN_OUT: {
      return initialState;
    }

    default: return state
  }
}

export default reducer;