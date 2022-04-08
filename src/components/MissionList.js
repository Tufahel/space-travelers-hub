import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderLists } from '../redux/Missions/MissionsAction';
import './MissionsList.css';

const MissionList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renderLists());
  }, []);
  const missions = useSelector((state) => state.MissionsReducers);
  const missionTable = missions.map((mission) => (
    <tr key={mission.id}>
      <td>{mission.name}</td>
      <td>{mission.description}</td>
      <td className="text-center"><span className="status-field unavailable-status">NOT A MEMBER</span></td>
      <td className="text-center"><button className="button-mission join-mission" type="button">JOIN MISSION</button></td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="mission-name">Mission</th>
            <th className="mission-description">Description</th>
            <th className="mission-status">Status</th>
            <th aria-label="mission action" className="mission-action" />
          </tr>
        </thead>
        <tbody>
          { missionTable }
        </tbody>
      </table>
    </div>
  );
};
export default MissionList;
