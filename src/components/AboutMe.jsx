import { BsPersonRaisedHand } from "react-icons/bs";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about__title">
        <h1>I&apos;m Niko!</h1>
        <BsPersonRaisedHand />
      </div>
      <p>
        A Frontend Developer with over a year of experience creating web pages.
        Passionate about design and data, currently studying Data Engineering
        with Python. Tech enthusiast committed to staying updated with the
        latest technologies and contributing to their evolution.
      </p>
    </div>
  );
};

export default AboutMe;
