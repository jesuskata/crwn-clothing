// Dependencies
import {
  takeLatest/* , put */, all, call, put
} from 'redux-saga/effects';

// Redux Actions Types
import { userActionTypes } from '../../actionTypes';

// Redux Actions
import {
  signInSuccess,
  signInFailure
} from '../../actions/userActions';

// Firebase Utils
import {
  auth, createUserProfileDocument, googleProvider
} from '../../../firebase/firebaseUtils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure);
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    userActionTypes.GOOGLE_SIGN_IN_START,
    signInWithGoogle
  );
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmail
  );
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ]);
}
