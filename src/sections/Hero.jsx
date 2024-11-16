import React from "react";
import Profile from "../components/Profile";
import Legend from "../components/Legend";
import MyButtons from "../components/MyButtons";

const Hero = () => {
  const email = "andrewmunoz.job@yahoo.com";
  return (
    <section className="sections hero">
      <Profile />
      <Legend
        title="Hi there!"
        text="Software developer with over **two years** of experience in creating web pages. From **Costa Rica** to the world specializing in developing **unique web applications**."
      />
      <div className="hero__buttons">
        <MyButtons
          link={`mailto:${email}`}
          typeB="outline gap"
          title="Contact me"
        />
        <MyButtons
          link={`mailto:${email}`}
          typeB="fill gap"
          title="Download CV"
        />
        {/*! el tipo de boton depende de si se quiere relleno o vacio, para eso existe
      fill y outline */}
      </div>
    </section>
  );
};

export default Hero;
