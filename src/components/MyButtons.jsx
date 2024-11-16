import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/Buttons.css";

const MyButtons = ({ typeB, title, link }) => {
  return (
    <div className={typeB}>
      <a href={link}>{title}</a>
    </div>
  );
};

MyButtons.propTypes = {
  typeB: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MyButtons;
