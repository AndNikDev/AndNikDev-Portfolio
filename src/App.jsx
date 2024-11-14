import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import ProfileSection from "./sections/ProfileSection";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>

      <div className="content">
        <ProfileSection />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <About />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
