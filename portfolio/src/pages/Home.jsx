import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
