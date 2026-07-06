import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
