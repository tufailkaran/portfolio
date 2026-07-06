import { motion } from 'framer-motion';
import { services } from '../../data/content';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <span className="section-subtitle">What I Do</span>
        <h2 className="section-title">Specialized Solutions</h2>
        <p className="section-intro">
          From enterprise Magento builds to warehouse automation — end-to-end
          engineering for commerce operations.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="service-card glass-card"
            >
              <div className="service-icon-box">
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>

              <div className="service-card-footer">
                <a href="#contact" className="learn-more">Discuss a project →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
