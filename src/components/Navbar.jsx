import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-header">
      <div className="nav-inner">
        <div className="nav-logo">
          <h1>AH</h1>
        </div>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-button">HOME</Link></li>
          <li><Link to="/about" className="nav-button">ABOUT</Link></li>
          <li><Link to="/portfolio" className="nav-button">PORTFOLIO</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
