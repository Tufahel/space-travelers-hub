import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assets/planet.png';

const Header = () => (
  <div className="header-body">
    <nav className="navigation">
      <img src={planet} alt="Logo" />
      <h1 className="header">Space Travelers</h1>
      <ul className="links">
        <li>
          <Link to="/" className="link1 link">Rockets</Link>
        </li>
        <li>
          <Link to="/missions" className="link2 link">Missions</Link>
        </li>
        <li>
          <Link to="/myprofile" className="link2 link">My Profile</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
