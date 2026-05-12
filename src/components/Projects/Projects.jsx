import { motion } from 'framer-motion';
import { projects } from '../../data/content';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <span className="section-subtitle">Portfolio</span>
        <h2 className="section-title">Enterprise Case Studies</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index % 3 * 0.1 }}
              className="project-card glass-card group"
            >
              <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay" />
                <div className="project-icon-tag">{project.icon}</div>
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-arrow">↗</span>
                </div>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
