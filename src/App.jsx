import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
