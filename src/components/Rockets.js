import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { renderLists } from '../redux/Rockets/RocketAction';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(renderLists());
    }
  }, []);

  return (
    <div>
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            image={rocket.image[1]}
            name={rocket.name}
            description={rocket.description}
          />
        ))
      }
    </div>
  );
};
export default Rockets;
