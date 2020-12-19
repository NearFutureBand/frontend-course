import { actionTypes } from '../actions';

/**
 * 1) Начальный стейт уже создан. В эту переменную нужно положить
 * результат запроса на получение списка пользователей
 * */ 
const initialState = {
  users: []
};

/**
 * 2) В редьюсере нужно выполнить присвоение action.payload в users. В action.payload
 * нужно положить список пользователей из запроса.
 */
const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    default: return state;
  }
}

export default reducer;