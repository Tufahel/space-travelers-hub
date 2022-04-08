import fetchData from '../../api/MissionsApi';

export const ADD_MISSIONS = 'space-travelers-hub/missions/ADD_MISSIONS';
export const MISSIONS_RESERVE = 'space-travelers-hub/missions/MISSIONS_RESERVE';
export const handleMissionsData = (data) => {
  const missions = [];
  data.forEach((mission) => {
    const {
      mission_id: id,
      mission_name: name,
      description,
    } = mission;
    const obj = {
      id,
      name,
      description,
      reserved: false,
    };
    missions.push(obj);
  });
  return missions;
};
export const renderLists = () => async (dispatch) => {
  const missions = await fetchData();
  dispatch({
    type: ADD_MISSIONS,
    payload: handleMissionsData(missions),
  });
};
export const reserveMissions = (state, id) => (dispatch) => {
  const missions = [...state];
  for (let i = 0; i < missions.length; i += 1) {
    if (missions[i].id === id) {
      if (!missions[i].reserved) {
        missions[i].reserved = true;
      } else {
        missions[i].reserved = false;
      }
    }
  }
  dispatch({
    type: MISSIONS_RESERVE,
    payload: missions,
  });
};
