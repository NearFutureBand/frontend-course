
import { actionTypes, TAuthActions } from '../types/actions';
import { IAuthState } from '../types/interfaces';

const initialState: IAuthState = {
  phone: '',
  password: '',
  user: null,
  errors: '',
  loading: false,
};

type TAuthReducer = (state: IAuthState, action: TAuthActions) => IAuthState;

const reducer: TAuthReducer = (state = initialState, action) => {
  
  switch (action.type) {

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