import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSaga);
