// Dependencies
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import { userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart'
  ]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
