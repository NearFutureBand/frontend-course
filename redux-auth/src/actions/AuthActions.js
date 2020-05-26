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