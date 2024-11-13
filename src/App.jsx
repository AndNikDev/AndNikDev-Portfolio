import "./App.css";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import AboutMe from "./components/AboutMe";

import ContactMe from "./components/ContactMe";

import Footer from "./components/Footer";

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
