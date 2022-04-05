import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    rocketName, description, flickrImages,
  } = props;
  return (
    <div className="grid-container">
      <div className="grid-item items-1">
        <p>{flickrImages}</p>
      </div>
      <div className="grid-item items-3">
        <p className="rocket_name">{rocketName}</p>
        <p>{description}</p>
        <button type="button">Reservation</button>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};
export default Rocket;
