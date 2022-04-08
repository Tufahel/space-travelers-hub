import fetchData from '../../api/RocketsApi';

export const ADD_ROCKETS = 'space-travelers-hub/rockets/ADD_ROCKETS';
export const ROCKETS_RESERVE = 'space-travelers-hub/rockets/RESERVE_ROCKETS';

export const handleRocketsData = (data) => {
  const rockets = [];
  data.forEach((rocket) => {
    const {
      id,
      rocket_name: name,
      description,
      flickr_images: image,
    } = rocket;
    const obj = {
      id,
      name,
      description,
      image,
      reserved: false,
    };
    rockets.push(obj);
  });
  return rockets;
};

export const renderLists = () => async (dispatch) => {
  const rockets = await fetchData();
  dispatch({
    type: ADD_ROCKETS,
    payload: handleRocketsData(rockets),
  });
};

export const reserveRocket = (state, id) => (dispatch) => {
  const rockets = [...state];

  for (let i = 0; i < rockets.length; i += 1) {
    if (rockets[i].id === id) {
      if (!rockets[i].reserved) {
        rockets[i].reserved = true;
      } else {
        rockets[i].reserved = false;
      }
    }
  }
  dispatch({
    type: ROCKETS_RESERVE,
    payload: rockets,
  });
};
