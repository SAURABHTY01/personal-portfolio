import React, { useState } from "react";
import ProfilePic from "../assets/profile-pic.png";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="section home-section">
      <ParticlesBackground />
      <div className="home-content">
        <div className="social-icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <div className="content">
          <h2>Hello,</h2>
          <h2>
            I'm <span>Saurabh Tyagi</span>
          </h2>
          <h1>MERN Stack Developer</h1>
          <div className="buttons">
            <button
              onMouseEnter={() => setIsHover("true")}
              onMouseLeave={() => setIsHover(false)}
            >
              <i
                className={`fa-solid  ${
                  isHover ? "fa-arrow-down anim-updown" : "fa-arrow-right"
                }`}
              ></i>
              Download CV
            </button>
            <button>
              <i className="fa-solid fa-arrow-right"></i>View Projects
            </button>
          </div>
        </div>
      </div>
      <div className="profile-img">
        <div className="profile-image">
          <img src={ProfilePic} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
