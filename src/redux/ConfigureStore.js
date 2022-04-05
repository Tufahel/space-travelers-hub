import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducers from './Rockets/RocketReducer';

const rootReducer = combineReducers({
  rocketsReducers,
});

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));
export default store;
