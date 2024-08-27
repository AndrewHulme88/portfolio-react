import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="content-area">
        <div className="container">
          <div className="page-header">
            <h1>About Me</h1>
          </div>
          <div className="page-body">
            <div className="page-body-img">
              <img src="/images/Profile.jpg" alt="Picture of me" />
            </div>
            <div className="page-body-info">
              <h2>I am <span className="color-blue">Andrew</span></h2>
              <p>I'm a web developer. I build websites for people and businesses...</p>
              <ul className="no-padding-list">
                <li><span className="color-blue">Name:</span> Andrew Hulme</li>
                <li><span className="color-blue">Location:</span> Melbourne, Australia</li>
                <li><span className="color-blue">Hobbies:</span> ...</li>
                <li><span className="color-blue">Email:</span> andrew_hulme04@gmail.com</li>
                <li><span className="color-blue">Status:</span> Available for work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
