import React from "react";
import Image from "../assets/profile-pic1.png";

const About = () => {
  return (
    <div class="section about">
      <img src={Image} alt="" className="pic" />
      <div class="text">
        <h2>About Me</h2>
        <h5>
          MERN Stack Developer & <span>Designer</span>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          natus ad sed harum itaque ullam enim quas, veniam accusantium, quia
          animi id eos adipisci iusto molestias asperiores explicabo cum vero
          atque amet corporis! Soluta illum facere consequuntur magni. Ullam
          dolorem repudiandae cumque voluptate consequatur consectetur, eos
          provident necessitatibus reiciendis corrupti!
        </p>
        <div class="data">
          <a href="#" class="hire">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
