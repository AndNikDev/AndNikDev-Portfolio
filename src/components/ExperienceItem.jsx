import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/ExperienceItem.css";

const ExperienceItem = ({
  title,
  subtitle,
  date,
  description,
  link,
  isLast,
}) => {
  return (
    <div className="experience-item">
      <div className="experience-icon">
        <span className="icon" />
        {!isLast && <div className="vertical-line" />}
      </div>
      <div className="experience-main">
        <h3 className="experience-title">{title}</h3>
        <h4 className="experience-subtitle">{subtitle}</h4>
        <p className="experience-date">{date}</p>
      </div>
      <div className="experience-description">
        <p>{description}</p>
        {link && (
          <a href="#" className="experience-link">
            {link}
          </a>
        )}
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  isLast: PropTypes.bool,
};

export default ExperienceItem;
