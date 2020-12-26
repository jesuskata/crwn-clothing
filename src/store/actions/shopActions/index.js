// Action Types
import { shopActionTypes } from '../../actionTypes';

export const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
