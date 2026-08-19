import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

import "./components/Navbar.css";
import "./components/Hero.css";
import "./components/About.css";
import "./components/Services.css";
import "./components/WhyChooseUs.css";
import "./components/Stats.css";
import "./components/Projects.css";
import "./components/Process.css";
import "./components/Testimonials.css";
import "./components/Contact.css";
import "./components/Footer.css";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
