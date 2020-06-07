import { ACTION_TYPES } from '../const';

const initialState = {
  users: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case ACTION_TYPES.GET_USERS_START: {
      return {
        ...state,
        loading: true,
      }
    }
    case ACTION_TYPES.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    }
    case ACTION_TYPES.GET_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }

    case ACTION_TYPES.SORT_USERS_BY_NAME: {
      const usersSorted = [...state.users];
      return {
        ...state,
        users: usersSorted.sort((a,b) => {
          if (a.name.first > b.name.first) {
            return 1;
          }
          if (a.name.first < b.name.first) {
            return -1;
          }
          return 0;
        })
      }
    }

    default: return state;
  }
}
