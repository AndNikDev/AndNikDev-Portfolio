// import { BsPersonRaisedHand } from "react-icons/bs";
import "../assets/styles/Hero.css";
import StyledButton from "../components/StyledButton";

const Hero = () => {
  const email = "andrewmunoz.job@yahoo.com";
  return (
    <div className="hero__section">
      <div className="about__title">
        <h1>Hi there, I&apos;m Nikolayk! </h1>
      </div>
      <p>
        A Frontend Developer with over a year of experience creating web pages.
        Passionate about design and data, currently studying Data Engineering
        with Python. Tech enthusiast committed to staying updated with the
        latest technologies and contributing to their evolution.
      </p>
      <div className="contact__buttons">
        <StyledButton title="Contact me" urlPage={`mailto:${email}`} />
        <StyledButton title="Download CV" />
      </div>
    </div>
  );
};

export default Hero;
