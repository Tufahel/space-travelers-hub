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
    </div>
  );
};
export default MissionsPage;
