// Dependencies
import {
  takeLatest, all, call, put
} from 'redux-saga/effects';

// Redux Action Types
import { userActionTypes } from '../../actionTypes';

// Redux Actions
import { clearCart } from '../../actions/cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(
    userActionTypes.SIGN_OUT_SUCCESS,
    clearCartOnSignOut
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ]);
}
