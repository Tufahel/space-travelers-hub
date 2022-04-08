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
    <tr className="row">
      <td className="column name">{name}</td>
      <td className="column description">
        {!reserved && (
        <p>{description}</p>
        )}
        {reserved && (
        <p>
          {' '}
          <span className="btn btn-secondary">Reserved</span>
          {' '}
          {description}
        </p>
        )}
      </td>
      <td className="column column-status"><p className="status">NOT A MEMBER</p></td>
      <td className="column column-button">
        {reserved
        && (
        <button
          type="button"
          className="button-leave"
          onClick={() => dispatch(reserveMissions(missions, id))}
        >
          Leave Mission
        </button>
        )}
        {!reserved
        && (
        <button
          type="button"
          className="button"
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
