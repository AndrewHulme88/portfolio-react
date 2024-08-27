import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-area">
        <div className="home-container">
          <div className="home-content">
            <h1>Hey! I'm <span className="color-blue">Andrew</span></h1>
            <p>Software developer</p>
            <div className="social-icons">
              {/* Add your social links here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
