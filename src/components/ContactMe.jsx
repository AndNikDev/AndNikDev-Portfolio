import StyledButton from "./StyledButton";
import "../styles/ContactMe.css";

const ContactMe = () => {
  const email = "andrewmunoz.job@yahoo.com";
  return (
    <div className="contact__buttons">
      <StyledButton title="Contact me" urlPage={`mailto:${email}`} />
      <StyledButton title="Download CV" />
    </div>
  );
};

export default ContactMe;
