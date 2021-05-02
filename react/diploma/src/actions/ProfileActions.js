import axios from 'axios';
import { ACTION_TYPES } from '../constants';

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