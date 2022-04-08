import { ADD_ROCKETS, ROCKETS_RESERVE } from './RocketAction';

const rocketsReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return action.payload;
    case ROCKETS_RESERVE:
      return action.payload;
    default: return state;
  }
};

export default rocketsReducers;
