import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderLists } from '../redux/Rockets/RocketAction';
import Rocket from './Rocket';

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
            id={rocket.id}
            image={rocket.image[1]}
            name={rocket.name}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </div>
  );
};
export default Rockets;
