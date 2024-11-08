import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ width: '15%', backgroundColor: '#0a192f' }}>
      <div className="nav-inner">
        <div className="nav-logo">
          <h1>AH</h1>
        </div>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link">ABOUT</Link></li>
          <li><Link to="/portfolio" className="nav-link">PORTFOLIO</Link></li>
          <li><Link to="/resume" className="nav-link">RESUME</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
