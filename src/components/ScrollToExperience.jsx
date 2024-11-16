import React, { useState, useEffect } from "react";
import "../assets/styles/components/ScrollToExperience.css";
const ScrollToExperience = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 50); // Mostrar solo al inicio
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    show && (
      <button
        className="scroll-to-experience-center"
        onClick={scrollToExperience}
      >
        ↓
      </button>
    )
  );
};

export default ScrollToExperience;
