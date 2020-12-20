import { ACTION_TYPES } from '../const';

const initialState = {
  userData: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPES.GET_USER_START: {
      return {
        ...state,
        loading: true,
      }
    }

    case ACTION_TYPES.GET_USER_SUCCESS: {
      return {
        ...state,
        userData: action.payload,
        loading: false,
      }
    }

    case ACTION_TYPES.GET_USER_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }

    default: return state;
  }
}
