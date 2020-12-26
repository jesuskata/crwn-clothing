// Data
import { SHOP_DATA } from '../../shared/shopData';

// Action Types
import { shopActionTypes } from '../../actionTypes';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
