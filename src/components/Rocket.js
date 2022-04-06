import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/Rockets/RocketAction';
import './RocketsComponentsStyle.css';

const Rocket = (props) => {
  const {
    id, name, image, description, reserved,
  } = props;
  const rockets = useSelector((state) => state.rocketsReducers);
  const dispatch = useDispatch();
  return (
    <div className="grid-container">
      <div className="grid-item items-1">
        <div>
          <img className="flickr-image" src={image} alt="" />
        </div>
      </div>
      <div className="grid-item items-2">
        <h3 className="rocket_name">{name}</h3>
        <p>{description}</p>
        {!reserved && (
        <button
          id={id}
          type="button"
          onClick={() => dispatch(reserveRocket(rockets, id))}
        >
          Reserve Rocket
        </button>
        )}
        {reserved && (
        <button
          id={id}
          type="button"
          onClick={() => dispatch(reserveRocket(rockets, id))}
        >
          Cancel Reserve
        </button>
        )}
      </div>
    </div>
  );
};
Rocket.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Rocket;
