import { actionTypes } from '../actions';

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
  errors: '', // переменная для вывода ошибок при аутентификации
  loading: false, // переменная для отображения анимации загрузки при выполнении запросов
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {

    /**
     * 2) Экшены CHANGE_PASSWORD и CHANGE_PHONE просто устанавливают
     * значение phone и password получая value из соответствующих инпутов
     * в компоненте
     */
    case actionTypes.CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload
      }
    }
    case actionTypes.CHANGE_PHONE: {
      return {
        ...state,
        phone: action.payload
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
    case actionTypes.LOGIN_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    }
    case actionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false
      }
    }

    default: return state;
  }
}

export default reducer;