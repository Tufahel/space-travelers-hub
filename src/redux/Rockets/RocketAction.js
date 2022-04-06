import fetchData from '../../api/RocketsApi';

export const ADD_ROCKETS = 'space-travelers-hub/rockets/ADD_ROCKETS';

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
