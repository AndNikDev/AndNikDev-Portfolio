import "./assets/styles/App.css"
import Navbar from "./sections/Navbar";
import ProfileSection from "./sections/ProfileSection";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ProfileSection />
        <AboutMe />
        <ContactMe />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
