export const ADD_RESERVATION = 'space-travelers-hub/rockets/ADD_RESERVATION';
export const CANCEL_RESERVATION = 'space-travelers-hub/Rockets/CANCEL_RESERVATION';

export const addReservation = (rocketName, description, flickrImages) => ({
  type: ADD_RESERVATION,
  payload: {
    id: new Date().getTime().toString(),
    rocket_name: rocketName,
    description,
    flickr_images: flickrImages,
  },
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});
