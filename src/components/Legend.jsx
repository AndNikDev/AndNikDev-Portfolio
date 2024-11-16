import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/Legend.css";

const parseText = (text) => {
  // Reemplaza palabras entre `**` con un <span> resaltado
  const parts = text.split(/(\*\*.*?\*\*)/g); // Divide usando el patrón de `**`
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} style={{ color: "#00ffff", fontWeight: "bold" }}>
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

const Legend = ({ title, text }) => {
  return (
    <div className="legend">
      <div className="legend__title">{title}</div>
      <div className="legend__text">{parseText(text)}</div>
    </div>
  );
};

Legend.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Legend;
