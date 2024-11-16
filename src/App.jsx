import "./assets/styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <header className="nav__">
        <Header />
      </header>

      <main className="main__">
        <Hero />
      </main>

      <footer className="foot__">
        <Footer />
      </footer>
    </>
  );
}

export default App;
