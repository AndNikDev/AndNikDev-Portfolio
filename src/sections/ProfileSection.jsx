import "../assets/styles/ProfileSection.css";
import { FaLinkedinIn, FaGithub, FaSpotify, FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const ProfileSection = () => {
  return (
    <div className="profile__section">
      <div id="profile__photo">
        <img
          srcSet="https://i.imgur.com/PheI5Xd.jpeg"
          alt="Profile Photo"
          className="profile__img"
          loading="lazy"
        />
      </div>

      <div className="profile__user">
        <h1>Nikolayk Muñoz</h1>
        <span>
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
            style={{ color: "#7414c3" }}
            className="profile__user__typeanimation"
          />
        </span>

        <div className="profile__socialmedia">
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

export default ProfileSection;
