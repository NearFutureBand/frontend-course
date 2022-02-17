import axios from 'axios';

import { ACTION_TYPES } from '../constants';

const getUsersStart = () => ({
  type: ACTION_TYPES.GET_USERS_START,
});

const getUsersSuccess = (users) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFailure = (err) => {
  return {
    type: ACTION_TYPES.GET_USERS_FAILURE,
    payload: err,
  }
}

export const getUsers = () => {
  
  return async (dispatch) => {

    dispatch({
      type: ACTION_TYPES.GET_USERS_START,
    });

    try {
      const response = await axios.get('http://localhost:3001/users');
      dispatch(getUsersSuccess(response.data));
    } catch (err) {
      dispatch(getUsersFailure(err));
    }
  }
}

export const sortUsersByName = () => {
  return {
    type: ACTION_TYPES.SORT_USERS_BY_NAME,
  }
}