import React from 'react';
import Navbar from '../components/Navbar';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="content-area">
        <div className="container">
          <div className="page-header">
            <h1>Portfolio</h1>
          </div>
          <div className="page-body">
            <div className="portfolio-card">
              <img src="/images/BluskiLogo.jpg" alt="Bluski Plumbing Logo" />
              <h3>Bluski Plumbing Website</h3>
              <p>A website I made for a friend's plumbing business</p>
            </div>
            {/* Repeat card structure for each portfolio item */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
