import React from 'react';
import PropTypes from 'prop-types';
import './RocketsComponentsStyle.css';

const Rocket = (props) => {
  const {
    rocketName, description, flickrImages,
  } = props;
  return (
    <div className="grid-container">
      <div className="grid-item items-1">
        <h2 className="flickr-image">{flickrImages}</h2>
      </div>
      <div className="grid-item items-2">
        <h3 className="rocket_name">{rocketName}</h3>
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
