// Dependencies
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

// Reducers
import rootReducer from './rootReducer';

const middlewares = [
  logger
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

export { store, persistor };
