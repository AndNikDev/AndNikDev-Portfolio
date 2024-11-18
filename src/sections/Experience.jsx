import React from "react";
import PropTypes from "prop-types";
import ExperienceItem from "../components/ExperienceItem";
import "../assets/styles/sections/Experience.css";

const Experience = () => {
  const experienceData = [
    {
      title: "Creador de Contenido",
      subtitle: "Twitch",
      date: "Actualmente...",
      description:
        "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
      link: "Saber más",
    },
    {
      title: "Principal Frontend Engineer",
      subtitle: "Adevinta Spain",
      date: "Septiembre 2022",
      description:
        "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
      link: null,
    },
  ];

  return (
    <div className="experience-timeline" id="experience">
      <h1 className="experience-legend">Experience</h1>
      {experienceData.map((item, index) => (
        <ExperienceItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
          description={item.description}
          link={item.link}
          isLast={index === experienceData.length}
        />
      ))}
    </div>
  );
};

export default Experience;
