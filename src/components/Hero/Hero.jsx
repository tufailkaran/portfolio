import { motion } from 'framer-motion';
import { contactInfo } from '../../data/content';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="badge">
            <span className="badge-icon">💼</span>
            Senior Magento / Adobe Commerce Developer
          </div>
          
          <h1 className="hero-title">
            Muhammad <span className="gradient-text">Tufail</span>
          </h1>
          
          <p className="hero-description">
            Enterprise-level architect specializing in <strong>Adobe Commerce</strong>, 
            warehouse automation, and scalable ecosystem engineering. Based in {contactInfo.location}.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href={contactInfo.resume} download className="btn-secondary">Download Resume</a>
          </div>
          
          <div className="hero-socials">
            <a href={`mailto:${contactInfo.email}`} className="social-link">
              <span className="icon">📧</span> Email
            </a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="social-link">
              <span className="icon">📱</span> {contactInfo.phone}
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-link">
              <span className="icon">🔗</span> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-image-container"
        >
          <div className="image-wrapper glass-card">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop" 
              alt="Muhammad Tufail" 
              className="hero-image"
            />
            <div className="image-overlay" />
            <div className="image-caption">
              <div className="avatar-mini">MT</div>
              <div className="caption-text">
                <h3>Enterprise Architect</h3>
                <p>Magento • Laravel • PHP • WordPress • React • APIs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
