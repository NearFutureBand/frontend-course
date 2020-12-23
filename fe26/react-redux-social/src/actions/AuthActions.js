import axios from 'axios';

import { ACTION_TYPES } from '../const';

export const onChangePhone = (phoneValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PHONE,
    payload: phoneValue,
  }
}

export const onChangePassword = (passwordValue) => {
  return {
    type: ACTION_TYPES.ON_CHANGE_PASSWORD,
    payload: passwordValue,
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

export const signIn = (phone, password) => {
  return async (dispatch, getState) => {
    //const phone = getState().auth.phone;
    dispatch(signInStart());
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone,
        password,
      });
      dispatch( signInSuccess(response.data) );
    } catch (err) {
      console.log('err', err);
      dispatch( signInFailure(err.response.data));
    }
    
  }
}

export const autoSignIn = (token) => {
  return async (dispatch) => {

    dispatch({
      type: 'AUTO_SIGN_IN_START',
    });

    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        token,
      });
      if (response.status !== 200) {
        console.log('status');
      }

      dispatch( signInSuccess(response.data) );

    } catch (err) {
      console.log('err', err);
      dispatch( signInFailure(err.message));
    }
  }
}

export const signOut = () => ({
  type: ACTION_TYPES.SIGN_OUT,
});