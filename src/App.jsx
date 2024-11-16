import "./assets/styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ScrollToExperience from "./components/ScrollToExperience";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <header className="nav__">
        <Header />
      </header>

      <main className="main__">
        <Hero />
        <Experience />
      </main>

      <ScrollToExperience />
      <div className="scroll-buttons">
        <ScrollToTop className="scroll-buttons" />
      </div>

      <footer className="foot__">
        <Footer />
      </footer>
    </>
  );
}

export default App;
