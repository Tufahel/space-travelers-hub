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
    <div className="row m-3">
      <div className="col col-md-6 col-lg-4 mt-2 mb-2">
        <div>
          <img className="w-100 h-100" src={image} alt="" />
        </div>
      </div>
      <div className="col col-md-6 col-lg-6">
        <h2>{name}</h2>
        {!reserved && (
          <p>{description}</p>
        )}
        {reserved && (
          <p>
            {' '}
            <span className="btn btn-info" style={{ color: 'white' }}>Reserved</span>
            {' '}
            {description}
          </p>
        )}
        {!reserved && (
        <button
          id={id}
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(reserveRocket(rockets, id))}
        >
          <span>Reserve Rocket</span>
        </button>
        )}
        {reserved && (
        <button
          id={id}
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => dispatch(reserveRocket(rockets, id))}
        >
          <span>Cancel Reserve</span>
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
