import React from 'react';
import PropTypes from 'prop-types';
import './MissionsStyle.css';

const Mission = (props) => {
  const {
    id, name, description,
  } = props;
  return (
    <div className="row m-3">
      <div className="col col-md-6 col-lg-4 mt-2 mb-2" />
      <div className="col col-md-6 col-lg-6">
        <h2 className="mission_name">{name}</h2>
        <p>{id}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
Mission.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Mission;
