// Dependencies
import {
  takeLatest, call, put, all
} from 'redux-saga/effects';

// Firebase
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebaseUtils';

// Redux Types
import { shopActionTypes } from '../../actionTypes';

// Redux Actions
import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../../actions/shopActions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }

  // collectionRef.get().then(snapshot => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   dispatch(fetchCollectionsSuccess(collectionsMap));
  // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}
