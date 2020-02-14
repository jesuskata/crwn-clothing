// Dependencies
import { combineReducers } from 'redux';

// Reducers
import { userReducer } from './reducers/userReducer';

export default combineReducers({
  user: userReducer
});
