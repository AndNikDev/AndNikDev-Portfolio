import "../styles/StyledButton.css";

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
