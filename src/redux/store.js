/* eslint-disable no-underscore-dangle */
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';

export const history = createHistory();

const middleware = [
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middleware)
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
