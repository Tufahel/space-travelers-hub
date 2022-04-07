import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducers from './Rockets/RocketReducer';
import MissionsReducers from './Missions/MissionsReducer';

const rootReducer = combineReducers({
  rocketsReducers,
  MissionsReducers,
});

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));
export default store;
