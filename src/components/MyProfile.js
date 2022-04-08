import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducers);
  const missions = useSelector((state) => state.MissionsReducers);
  return (
    <div className="row m-5">
      <div className="col border border-dark m-2">
        <h2>My Missions</h2>
        {
          missions.map((mission) => (
            <div key={mission.id} className="border border-light">
              {mission.reserved && (
              <p>{mission.name}</p>
              )}
            </div>
          ))
        }
      </div>
      <div className="col border border-dark m-2">
        <h2>My Rockets</h2>
        {
        rockets.map((rocket) => (
          <div key={rocket.id} className="border border-light">
            {rocket.reserved && (
            <p>{rocket.name}</p>
            )}
          </div>
        ))
      }
      </div>
    </div>
  );
};
export default MyProfile;
