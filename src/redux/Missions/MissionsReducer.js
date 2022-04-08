import { ADD_MISSIONS, MISSIONS_RESERVE } from './MissionsAction';

const MissionsReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return action.payload;
    case MISSIONS_RESERVE:
      return action.payload;
    default: return state;
  }
};
export default MissionsReducers;
