/* eslint-disable no-underscore-dangle */
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';

const middleware = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middleware)
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
