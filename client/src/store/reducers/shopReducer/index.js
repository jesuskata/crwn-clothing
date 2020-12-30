// Action Types
import { shopActionTypes } from '../../actionTypes';

const INITIAL_STATE = {
  collections: null,
  isFetchingCollections: false,
  errorMessage: undefined
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetchingCollections: true
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetchingCollections: false,
        collections: action.payload
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetchingCollections: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
