// Action Types
import { userActionTypes } from '../../actionTypes';

// Google Sign In Actions
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

// Email Sign In Actions
export const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

// Common Actions
export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});
