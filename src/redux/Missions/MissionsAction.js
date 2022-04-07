import fetchData from '../../api/MissionsApi';

export const ADD_MISSIONS = 'space-travelers-hub/missions/ADD_MISSIONS';

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
