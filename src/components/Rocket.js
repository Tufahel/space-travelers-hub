import React from 'react';
import PropTypes from 'prop-types';
import './RocketsComponentsStyle.css';

const Rocket = (props) => {
  const {
    name, image, description,
  } = props;
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
        <button type="button">Reservation</button>
      </div>
    </div>
  );
};
Rocket.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Rocket;
