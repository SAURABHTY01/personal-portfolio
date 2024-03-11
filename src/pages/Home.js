import React, { useState } from "react";
import ProfilePic from "../assets/profile-pic.png";
import ParticlesBackground from "../components/ParticlesBackground";
import {
  FaAnglesRight,
  FaAnglesDown,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const Home = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="section home-section">
      <ParticlesBackground />
      <div className="home-content">
        <div className="social-icons">
          <FaFacebookF className="fa-brands" />
          <FaLinkedinIn className="fa-brands" />
          <FaXTwitter className="fa-brands" />
          <FaGithub className="fa-brands" />
          <FaInstagram className="fa-brands" />
        </div>
        <div className="content">
          <div className="profile-content">
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
                {isHover ? (
                  <FaAnglesDown className="anim-updown" />
                ) : (
                  <FaAnglesRight className="anim-leftRight" />
                )}
                Download CV
              </button>
              <button>
                <FaAnglesRight className="anim-leftRight" />
                View Projects
              </button>
            </div>
          </div>
          <div className="profile-image">
          <img src={ProfilePic} alt="" srcset="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
