const initialState = {
  users: [],
  loading: false,
  err: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_START': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'GET_USERS_SUCCESS': {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case 'GET_USERS_FAILURE': {
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    }
  }
  return state;
};

export default reducer;
