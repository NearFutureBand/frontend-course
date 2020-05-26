import { ACTION_TYPES } from '../const';

const initialState = {
  phone: '',
  password: '',
  user: null,
};

export default (state = initialState, action) => {
  console.log(action);
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
    default: return state
  }
}