import { ADD_MISSIONS } from './MissionsAction';

const MissionsReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return action.payload;
    default: return state;
  }
};

export default MissionsReducers;
