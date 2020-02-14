// Action Types
import { userActionTypes } from '../../actionTypes';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
