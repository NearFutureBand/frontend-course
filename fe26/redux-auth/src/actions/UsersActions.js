import axios from 'axios';

import { ACTION_TYPES } from '../const';

// 1) экщн, который показывает старт запроса 
const getUsersStart = () => ({
  type: ACTION_TYPES.GET_USERS_START,
});

// 2) успех запроса
const getUsersSuccess = (users) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload: users,
});

// 3) провал запроса
const getUsersFailure = (err) => {
  return {
    type: ACTION_TYPES.GET_USERS_FAILURE,
    payload: err,
  }
}

export const getUsers = () => {
  
  return async (dispatch) => {
    
    // диспатч принимает экшн (объект)
    dispatch({
      type: ACTION_TYPES.GET_USERS_START,
    });

    // 1) выполнение запросы
    try {
      const response = await axios.get('http://localhost:3001/users');
      // 2) запрос успешен
      dispatch(getUsersSuccess(response.data));
    } catch (err) {

      // 3) запрос провалился
      dispatch(getUsersFailure(err));

    }
    
  }

}

export const sortUsersByName = () => {
  return {
    type: ACTION_TYPES.SORT_USERS_BY_NAME,
  }
}