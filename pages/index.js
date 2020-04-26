import Header from "../components/Header.js";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import CV from "../components/CV.js";
import Projects from "../components/Projects.js";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Projects />
        <CV />
        <Contact />
      </main>
    </div>
  );
}
