import { motion } from 'framer-motion';
import { services } from '../../data/content';
import './Services.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <span className="section-subtitle">What I Do</span>
        <h2 className="section-title">Specialized Solutions</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card glass-card"
            >
              <div className="service-icon-box">
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              
              <div className="service-card-footer">
                <span className="learn-more">Expertise Level: Enterprise</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
