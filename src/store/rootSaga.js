// Dependencies
import { all, call } from 'redux-saga/effects';

// Redux Sagas
import { shopSagas } from './reduxSagas/shopSagas';
import { userSagas } from './reduxSagas/userSagas';
import { cartSagas } from './reduxSagas/cartSagas';

export function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas)
  ]);
}
