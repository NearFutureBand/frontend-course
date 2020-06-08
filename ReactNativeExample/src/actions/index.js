import axios from 'axios';

const getUsersStart = {
  type: 'GET_USERS_START',
};
const getUsersSuccess = (usersData) => ({
  type: 'GET_USERS_SUCCESS',
  payload: usersData,
});
const getUsersFailure = (err) => ({
  type: 'GET_USERS_FAILURE',
  payload: err,
});

export const getUsers = () => {
  return async (dispatch) => {
    // запрос начался
    dispatch(getUsersStart);
    try {
      const response = await axios.get('http://localhost:3001/users');
      // запрос закончился успешно
      dispatch(getUsersSuccess(response.data));
    } catch (err) {
      console.log(err);
      // запрос провалился
      dispatch(getUsersFailure());
    }
  };
};
