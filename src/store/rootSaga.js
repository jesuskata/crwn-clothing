// Dependencies
import { all, call } from 'redux-saga/effects';

// Redux Sagas
import { fetchCollectionsStart } from './reduxSagas/shopSagas';

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}
