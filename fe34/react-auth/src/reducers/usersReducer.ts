import { actionTypes } from '../types/actions';

import { IUsersState } from '../types/interfaces';

type TUsersReducer = (state: IUsersState, action: any) => IUsersState;

/**
 * 1) Начальный стейт уже создан. В эту переменную нужно положить
 * результат запроса на получение списка пользователей
 * */ 
const initialState: IUsersState = {
  users: []
};

/**
 * 2) В редьюсере нужно выполнить присвоение action.payload в users. В action.payload
 * нужно положить список пользователей из запроса.
 */
const reducer: TUsersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    default: return state;
  }
}

export default reducer;