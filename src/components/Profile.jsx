import React from "react";
import { FaLinkedinIn, FaGithub, FaSpotify, FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import prfImg from "../assets/images/fotodeperfil.jpg";

import "../assets/styles/components/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__photo">
        <img src={prfImg} alt="Profile Photo" />
      </div>

      <div className="profile__text">
        <div className="profile__user">
          <h1 className="profile__user_name">Nikolayk Muñoz A.</h1>
          <p className="profile__user_username">
            @AndNik.
            <TypeAnimation
              sequence={[
                "Frontend",
                1000,
                "Developer",
                1000,
                "Data",
                1000,
                "Engineer",
                1000,
                "Linux",
                1000,
                "Enthusiast",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ color: "#88c0d0" }}
              className="profile__user__typeanimation"
            />
          </p>
        </div>

        <div className="profile__social">
          <a href="https://linkedin.com/in/nikolaykmunozalvarez">
            <FaLinkedinIn color="white" />
          </a>

          <a href="https://github.com/AndNikDev">
            <FaGithub color="white" />
          </a>

          <a href="">
            <FaSpotify color="white" />
          </a>

          <a href="">
            <FaSteam color="white" />
          </a>

          <a href="">
            <SiEpicgames color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
