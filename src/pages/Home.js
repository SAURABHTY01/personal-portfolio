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

  const handleDownload = () => {
    const fileUrl = '/SaurabhTyagiResume.pdf'; // Replace with the actual file URL
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Saurabh_Tyagi_Resume.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section home-section" id='home'>
      <ParticlesBackground />
      <div className="home-content">
        <div className="social-icons">
          <FaFacebookF className="fa-brands" />
          <FaInstagram className="fa-brands" />
          <FaLinkedinIn className="fa-brands" />
          <FaXTwitter className="fa-brands" />
          <FaGithub className="fa-brands" />
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
                onClick={handleDownload}
                onMouseEnter={() => setIsHover(true)}
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
    </section>
  );
};

export default Home;
