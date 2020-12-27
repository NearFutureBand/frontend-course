import { actionTypes } from '../types/actions';

import { IUsersState } from '../types/interfaces';

type TUsersReducer = (state: IUsersState, action: any) => IUsersState;

const initialState: IUsersState = {
  users: []
};

const reducer: TUsersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    default: return state;
  }
}

export default reducer;