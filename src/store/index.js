// Dependencies
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Reducers
import rootReducer from './rootReducer';

const middlewares = [
  logger
];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
