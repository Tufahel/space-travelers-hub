import { ADD_ROCKETS } from './RocketAction';

const rocketsReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ROCKETS:

      return action.payload;
    default: return state;
  }
};

export default rocketsReducers;
