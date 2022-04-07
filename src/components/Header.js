import React from 'react';
import { Link } from 'react-router-dom';
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
          <li>
            <Link to="/" className="m-2">Rockets</Link>
          </li>
          <li>
            <Link to="/missions" className="m-2">Missions</Link>
          </li>
          <li>
            <Link to="/myprofile" className="m-2">My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
