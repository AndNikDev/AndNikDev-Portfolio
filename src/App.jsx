import "./assets/styles/App.css"
import Navbar from "./sections/Navbar";
import ProfileSection from "./sections/ProfileSection";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
//import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ProfileSection />
        <AboutMe />
        <ContactMe />
        {/* <Footer /> */}
        <br /><br /><br /><br /><br /><br /><br /><br />
        este es un mensajito para mi novia hermosa que la amo tanto a mi ninia chiquita hermosa bb
      </div>
    </div>
  );
}

export default App;
