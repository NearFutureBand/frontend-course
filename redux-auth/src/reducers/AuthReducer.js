import { ACTION_TYPES } from '../const';

const initialState = {
  phone: '',
  password: '',
  user: null,
  token: null,
};

export default (state = initialState, action) => {
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
      }
    }
    case ACTION_TYPES.SIGN_IN_SUCCESS: {

      localStorage.setItem('token', action.payload.token);

      return {
        ...state,
        ...initialState,
        user: action.payload,
        token: action.payload.token,
      }
    }
    case ACTION_TYPES.SIGN_IN_FAILURE: {
      return {
        ...state,
      }
    }

    default: return state
  }
}