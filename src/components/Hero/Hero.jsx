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
            Enterprise-level engineer specializing in <strong>Adobe Commerce</strong>,
            warehouse automation, and scalable ecosystem engineering — currently building
            for Tile Mountain (UK). Based in {contactInfo.location}.
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="code-card glass-card" aria-hidden="true">
            <div className="code-card-header">
              <span className="window-dot dot-red" />
              <span className="window-dot dot-yellow" />
              <span className="window-dot dot-green" />
              <span className="code-card-title">tufail.config.js</span>
            </div>
            <pre className="code-card-body">
              <code>
                <span className="tok-kw">const</span> <span className="tok-var">engineer</span> = {'{'}{'\n'}
                {'  '}<span className="tok-key">name</span>: <span className="tok-str">'Muhammad Tufail'</span>,{'\n'}
                {'  '}<span className="tok-key">role</span>: <span className="tok-str">'Magento Developer · SWE-II'</span>,{'\n'}
                {'  '}<span className="tok-key">company</span>: <span className="tok-str">'Tile Mountain (UK)'</span>,{'\n'}
                {'  '}<span className="tok-key">core</span>: [<span className="tok-str">'Adobe Commerce'</span>, <span className="tok-str">'PHP'</span>, <span className="tok-str">'Laravel'</span>],{'\n'}
                {'  '}<span className="tok-key">stack</span>: [<span className="tok-str">'React'</span>, <span className="tok-str">'Node.js'</span>, <span className="tok-str">'GraphQL'</span>],{'\n'}
                {'  '}<span className="tok-key">focus</span>: <span className="tok-str">'Warehouse Automation & ERP'</span>,{'\n'}
                {'  '}<span className="tok-key">experience</span>: <span className="tok-num">'6+ years'</span>,{'\n'}
                {'  '}<span className="tok-key">available</span>: <span className="tok-bool">true</span>{'\n'}
                {'}'};
              </code>
            </pre>
            <div className="code-card-footer">
              <div className="avatar-mini">MT</div>
              <div className="caption-text">
                <h3>Enterprise Architect</h3>
                <p>Magento · Laravel · PHP · WordPress · React · APIs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
