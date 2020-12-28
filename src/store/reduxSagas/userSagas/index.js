// Dependencies
import {
  takeLatest/* , put */, all, call, put
} from 'redux-saga/effects';

// Redux Actions Types
import { userActionTypes } from '../../actionTypes';

// Redux Actions
import { googleSignInSuccess, googleSignInFailure } from '../../actions/userActions';

// Firebase Utils
import {
  auth, createUserProfileDocument, googleProvider
} from '../../../firebase/firebaseUtils';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(googleSignInFailure);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    userActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  );
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
