import { motion } from 'framer-motion';
import { contactInfo, profile } from '../../data/content';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="badge">
            <span className="badge-dot" aria-hidden="true" />
            {profile.role}
          </div>

          <h1 className="hero-title">
            Muhammad <span className="gradient-text">Tufail</span>
          </h1>

          <p className="hero-description">
            Software engineer specializing in <strong>Adobe Commerce</strong>,
            warehouse automation, and scalable ecosystem engineering — currently building
            for Tile Mountain (UK).
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href={contactInfo.resume} download className="btn-secondary">Download Resume</a>
          </div>

          <div className="hero-socials">
            <a href={`mailto:${contactInfo.email}`} className="social-link">
              <span className="icon" aria-hidden="true">📧</span> Email
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="social-link">
              <span className="icon" aria-hidden="true">📱</span> {contactInfo.phone}
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-link">
              <span className="icon" aria-hidden="true">🔗</span> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
