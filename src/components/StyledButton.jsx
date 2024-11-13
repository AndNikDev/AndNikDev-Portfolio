import "../styles/StyledButton.css";

// eslint-disable-next-line react/prop-types
const StyledButton = ({ title, urlPage }) => {
  return (
    <div className="button-border">
      <a href={urlPage} className="button-content">
        <span className="button__text">{title}</span>
      </a>
    </div>
  );
};

export default StyledButton;
