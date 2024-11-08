import React from 'react';
import Navbar from '../components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="content-area">
        <div className="container">
          <div className="home-content">
            <h1>Hey! I'm <span className="color-blue">Andrew</span></h1>
            <p>Software developer</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/andrew-hulme-b3a649291/"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/AndrewHulme88"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-slack"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
