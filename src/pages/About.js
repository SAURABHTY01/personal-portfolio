import React from "react";
import Image from "../assets/profile-pic1.png";

const About = () => {
  return (
    <div class="section about" id="about">
      <img src={Image} alt="" className="pic" />
      <div class="text">
        <h2 className="section-title">About Me</h2>
        <h5>
          MERN Stack Developer & <span>Designer</span>
        </h5>
        <p>
          {/* I'm Saurabh Tyagi, a proficient MERN Stack Developer with three years
          of hands-on experience in crafting robust and scalable web
          applications. My journey in the realm of software development began
          with a passion for problem-solving and a fascination with technology.
          <br/>
          <br/>
          Throughout my career, I have honed my skills in MongoDB, Express.js,
          React.js, and Node.js, allowing me to create dynamic and efficient
          solutions that meet the evolving needs of modern businesses. I thrive
          in collaborative environments where innovation and creativity are
          encouraged, and I am always eager to contribute my expertise to
          achieve collective success. 
          <br/>
          <br/>
          My approach to development is rooted in a
          commitment to excellence, attention to detail, and a relentless
          pursuit of improvement. I enjoy staying abreast of the latest trends
          and technologies in the industry, constantly seeking new ways to
          enhance my skill set and deliver cutting-edge solutions. 
          <br/>
          <br/>
          Beyond
          coding, I am a dedicated team player who values open communication,
          mutual respect, and continuous learning. I believe in the power of
          teamwork to overcome challenges and achieve exceptional results. */}
          I'm Saurabh Tyagi, a seasoned MERN Stack Developer with three years of experience crafting robust web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I thrive in collaborative environments, leveraging my dedication to excellence and continuous learning to deliver cutting-edge solutions. With a passion for problem-solving and a commitment to teamwork, I'm eager to contribute my skills to innovative projects, turning ideas into reality in the dynamic landscape of web development.
        </p>
        <div class="data">
          <a href="hire" class="hire">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
