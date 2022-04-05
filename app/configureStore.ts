/**
 * Create the store with dynamic reducers
 */

import {createStore, applyMiddleware, compose, StoreEnhancer} from 'redux';
import Reactotron from './ReactotronConfig';

import {createInjectorsEnhancer} from 'redux-injectors';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  let middlewares: SagaMiddleware[] = [];
  let enhancers: StoreEnhancer[] = [];

  if (Reactotron?.createSagaMonitor) {
    const sagaMonitor = Reactotron?.createSagaMonitor();

    const reduxSagaMonitorOptions = {sagaMonitor};

    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const {run: runSaga} = sagaMiddleware;

    middlewares = [sagaMiddleware];

    enhancers.push(applyMiddleware(...middlewares));
    enhancers.push(
      createInjectorsEnhancer({
        createReducer,
        runSaga,
      }),
    );
  } else {
    enhancers.push(applyMiddleware(...middlewares));
  }

  if (Reactotron?.createEnhancer) {
    enhancers.push(Reactotron?.createEnhancer());
  }

  let composeEnhancers = compose;

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  return store;
}
