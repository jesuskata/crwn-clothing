// Dependencies
import { all, call } from 'redux-saga/effects';

// Redux Sagas
import { fetchCollectionsStart } from './reduxSagas/shopSagas';
import { userSagas } from './reduxSagas/userSagas';

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas)
  ]);
}
