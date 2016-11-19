import Deferred from '../utils/deferred';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { customers, company, routerReducer} from '../reducers/index';

console.warn('******** add redux-batched-subscribe ********');
var store = null;

var storeInitializeDefer = new Deferred();

export function waitForStore() {
  return storeInitializeDefer.promise;
}

export function getStore() {
  return store;
}

export function getState() {
  return store.getState();
}

export function dispatch(action) {
  return store.dispatch(action);
}

export function initializeStore(initialState = {}) {
  const middlewares = [
    thunkMiddleware
  ];

  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const rootReducer = combineReducers({ customers, company, routing: routerReducer });

  store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  store.asyncReducers = {}; // Async reducer registry

  storeInitializeDefer.resolve(store);

  return store;
}

// import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import {devTools, persistState} from 'redux-devtools';
// import { customers, company, routerReducer} from '../reducers/index';
//
// let createStoreWithMiddleware;
//
// // Configure the dev tools when in DEV mode
// if (__DEV__) {
//   createStoreWithMiddleware = compose(
//     applyMiddleware(thunkMiddleware),
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )(createStore);
// } else {
//   createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
// }
//
// const rootReducer = combineReducers({ customers, company, routing: routerReducer });
//
// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(rootReducer, initialState);
// }
//
// export default function configureStore(initialState) {
//   const store = createStore(rootReducer, initialState);
//
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers/index');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//
//   return store;
// }
