// Dependencies
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import { userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import { directoryReducer } from './reducers/directoryReducer';
import { shopReducer } from './reducers/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart', 'directory'
  ]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
