import React from 'react';
import Rocket from './Rocket';

const Rockets = () => {
  const descrip = 'This is a rocket and it is rocket so it is a rocket now there is the rocket.This is a rocket and it is rocket so it is a rocket now there is the rocket.This is a rocket and it is rocket so it is a rocket now there is the rocket.This is a rocket and it is rocket so it is a rocket now there is the rocket.This is a rocket and it is rocket so it is a rocket now there is the rocket.This is a rocket and it is rocket so it is a rocket now there is the rocket.';
  return (

    <div>
      <div>
        <div className="card">
          <Rocket rocketName="Rocket name" description={descrip} flickrImages="pic" />
          <Rocket rocketName="Rocket name" description={descrip} flickrImages="pic" />
          <Rocket rocketName="Rocket name" description={descrip} flickrImages="pic" />
        </div>
      </div>
    </div>
  );
};
export default Rockets;
