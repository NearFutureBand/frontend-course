import axios from 'axios';
import Swal from 'sweetalert2';

import { ACTION_TYPES } from '../constants';

export const onChangePassword = (passwordValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PASSWORD,
    payload: passwordValue,
  }
}
export const onChangePhone = (phoneValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PHONE,
    payload: phoneValue,
  }
}

const signInStart = () =>{
  return {
    type: ACTION_TYPES.SIGN_IN_START,
  }
}

const signInSuccess = (userData) =>{
  return {
    type: ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: userData,
  }
}

const signInFailure = (err) => {
  return {
    type: ACTION_TYPES.SIGN_IN_FAILURE,
    payload: err,
  }
}

export const signIn = ({ phone, password, token }) => {
  return async (dispatch, getState) => {
    
    dispatch(signInStart());
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone,
        password,
        token
      });

      dispatch(signInSuccess(response.data));
      
      if (!token) {
        Swal.fire({
          icon: 'success',
          title: 'What\'s up brah',
          showConfirmButton: false,
          timer: 1500
        });
      }

      localStorage.setItem('token', response.data.token);
    } catch (err) {
      console.log('err', err);
      dispatch( signInFailure(err.response?.data));
    }
  }
}

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: ACTION_TYPES.SIGN_OUT,
  });
  Swal.fire({
    icon: 'info',
    title: 'Bye bye!',
    showConfirmButton: false,
    timer: 1500
  });
}

export const updateProfile = () => (dispatch, getState) => {
  const token = getState().auth.token;
  dispatch(signIn({ token }));
}