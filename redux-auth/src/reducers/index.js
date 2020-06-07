import { combineReducers } from 'redux';

import AuthReducer from  './AuthReducer';
import UsersReducer from './UsersReducer';
import ProfileReducer from './ProfileRreducer';

export default combineReducers({
  auth: AuthReducer,
  users: UsersReducer,
  profile: ProfileReducer,
});
