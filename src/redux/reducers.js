import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {pageReducer} from '../containers/page/pageReducer';

const reducers = combineReducers({
  routerReducer,
  pageReducer
});

export default reducers;
