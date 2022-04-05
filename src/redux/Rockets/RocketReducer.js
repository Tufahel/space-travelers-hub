import { ADD_RESERVATION, CANCEL_RESERVATION } from './RocketAction';

const initialData = {
  list: [],
};

const rocketsReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_RESERVATION:

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            rocket_name: action.payload.rocket_name,
            description: action.payload.description,
            flickr_images: action.payload.flickr_images,
          },
        ],
      };
    case CANCEL_RESERVATION:

      return {
        ...state,
        list: state.list.filter((elem) => elem.id !== action.id),
      };
    default: return state;
  }
};

export default rocketsReducers;
