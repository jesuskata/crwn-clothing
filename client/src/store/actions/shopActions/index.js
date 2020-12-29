// Firebase Dependencies
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebaseUtils';

// Action Types
import { shopActionTypes } from '../../actionTypes';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef.get().then(snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    dispatch(fetchCollectionsSuccess(collectionsMap));
  }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
};
