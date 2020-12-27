import axios, { AxiosResponse } from 'axios';

import {
  actionTypes, 
  TPasswordChangeActionCreator, 
  TPhoneChangeActionCreator, 
  TLoginStartAC, 
  TLoginSuccessAC, 
  TLoginFailureAC
} from '../types/actions';

import { IUser } from '../types/interfaces';

type TLoginParams = ({
  phone?: string,
  password?: string,
  token?: string,
});

export const passwordChangeActionCreator: TPasswordChangeActionCreator = (value) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload: value
  }
}
export const phoneChangeAction: TPhoneChangeActionCreator = (value) => ({
  type: actionTypes.CHANGE_PHONE,
  payload: value
});

const loginStart: TLoginStartAC = () => ({
  type: actionTypes.LOGIN_START,
});

const loginSuccess: TLoginSuccessAC = (userData) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: userData
});

const loginFailure: TLoginFailureAC = (error) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload: error,
});

export const login = ({ phone, password, token }: TLoginParams) => {
  return async (dispatch: any) => {
    try {
      dispatch(loginStart());

      const response: AxiosResponse<IUser> = await axios.post('http://localhost:3001/auth/sign-in', {
        phone,
        password,
        token
      });

      dispatch(loginSuccess(response.data));

      localStorage.setItem('token', response.data.token);
    } catch (err) {
      dispatch(loginFailure(err?.response?.data));
    }
  }
}
