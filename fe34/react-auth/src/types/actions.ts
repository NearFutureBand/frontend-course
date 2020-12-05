import { IUser } from './interfaces';

export enum actionTypes {
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_PHONE = 'CHANGE_PHONE',
  LOGIN_START = 'LOGIN_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE'
}

export type TPasswordChangeAction = {
  type: actionTypes.CHANGE_PASSWORD,
  payload: string,
}

export type TPhoneChangeAction = {
  type: actionTypes.CHANGE_PHONE,
  payload: string,
}
export type TLoginStartAction = {
  type: actionTypes.LOGIN_START
}
export type TLoginSuccessAction = {
  type: actionTypes.LOGIN_SUCCESS,
  payload: IUser
}
export type TLoginFailureAction = {
  type: actionTypes.LOGIN_FAILURE,
  payload: string
}

export type TAuthActions = TPasswordChangeAction |
  TPhoneChangeAction |
  TLoginStartAction |
  TLoginSuccessAction |
  TLoginFailureAction;

export type TPasswordChangeActionCreator = (value: string) => TPasswordChangeAction;
export type TPhoneChangeActionCreator = (value: string) => TPhoneChangeAction;
export type TLoginStartAC = () => TLoginStartAction;
export type TLoginSuccessAC = (userData: IUser) => TLoginSuccessAction;
export type TLoginFailureAC = (error: string) => TLoginFailureAction;