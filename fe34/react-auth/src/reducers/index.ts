import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import UsersRedcuer from './usersReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  users: UsersRedcuer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;

