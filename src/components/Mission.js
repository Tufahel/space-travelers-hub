import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './missionList.css';
import { reserveMissions } from '../redux/Missions/MissionsAction';

const Mission = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.MissionsReducers);
  return (
    <tr className="tr">
      <td className="col col-md-2 col-lg-2"><h2>{name}</h2></td>
      <td className="col col-md-6 col-lg-6"><p>{description}</p></td>
      <td className="col col-md-2 col-lg-2">
        {!reserved && (
        <span className="btn btn-secondary">Not a Member</span>
        )}
        {reserved && (
        <p>
          <span className="btn btn-info" style={{ color: 'white' }}>Active Member</span>
        </p>
        )}
      </td>
      <td className="col col-md-6 col-lg-6">
        {reserved
        && (
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => dispatch(reserveMissions(missions, id))}
        >
          Leave Mission
        </button>
        )}
        {!reserved
        && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => dispatch(reserveMissions(missions, id))}
        >
          Join Mission
        </button>
        )}
      </td>
    </tr>
  );
};
Mission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Mission;
