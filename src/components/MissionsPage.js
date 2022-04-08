import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderLists } from '../redux/Missions/MissionsAction';
import Mission from './Mission';

const MissionsPage = () => {
  const missions = useSelector((state) => state.MissionsReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(renderLists());
    }
  }, []);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"><h3>Mission</h3></th>
            <th scope="col"><h3>Description</h3></th>
            <th scope="col"><h3>Status</h3></th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {
        missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))
      }
        </tbody>
      </table>
    </div>
  );
};
export default MissionsPage;
