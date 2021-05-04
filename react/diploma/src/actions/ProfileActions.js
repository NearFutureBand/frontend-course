import axios from 'axios';
import Swal from 'sweetalert2';

import { ACTION_TYPES } from '../constants';
import { updateProfile } from './AuthActions';

export const getUser = (index) => {
  return async (dispatch) => {

    dispatch({
      type: ACTION_TYPES.GET_USER_START,
    });

    try {
      const response = await axios.get(`http://localhost:3001/users/${index}`);
      
      dispatch({
        type: ACTION_TYPES.GET_USER_SUCCESS,
        payload: response.data,
      });

    } catch (err) {
      console.log(err);
      dispatch({
        type: ACTION_TYPES.GET_USER_FAILURE,
        payload: err.response.message,
      });
    }
  }
}

export const addFriend = (token, index) => async (dispatch) => {
  try {
    dispatch({
      type: ACTION_TYPES.ADD_FRIEND_START,
    });

    await axios.post('http://localhost:3001/add-friend', {
      token,
      index
    });

    dispatch({
      type: ACTION_TYPES.ADD_FRIEND_SUCCESS,
    });

    dispatch(getUser(index));

    dispatch(updateProfile());

    Swal.fire({
      icon: 'success',
      title: 'Now you are friends!',
      showConfirmButton: false,
      timer: 1500
    });

  } catch (err) {
    dispatch({
      type: ACTION_TYPES.ADD_FRIEND_FAILURE,
    });
  }
}