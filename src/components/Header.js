import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import './Header.css';

const Header = () => (
  <div className="">
    <nav className="d-flex justify-content-between m-4 border-bottom">
      <div className="d-flex justify-content-between align-items-center gap-3 mb-2">
        <img src={planet} alt="Logo" />
        <h1 className="header">Space Travelers</h1>
      </div>
      <div>
        <ul className="list-unstyled d-flex justify-content-evenly m-4">
          {' '}
          <li>
            {' '}
            <NavLink to="/" activeclassname="active-link" className="link m-2">Rockets</NavLink>
            {' '}
          </li>
          {' '}
          <li>
            {' '}
            <NavLink to="/missions" activeclassname="active-link" className="link m-2">Missions</NavLink>
            {' '}
          </li>
          {' '}
          <li>
            {' '}
            <NavLink to="/myprofile" activeclassname="active-link" className="link m-2">My Profile</NavLink>
            {' '}
          </li>
          {' '}
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
