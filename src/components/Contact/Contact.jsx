import { motion } from 'framer-motion';
import { contactInfo } from '../../data/content';
import './Contact.css';

const channels = [
  {
    icon: '📧',
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`
  },
  {
    icon: '📱',
    label: 'Phone / WhatsApp',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, '')}`
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'in/tufailkaran',
    href: contactInfo.linkedin,
    external: true
  },
  {
    icon: '📍',
    label: 'Location',
    value: `${contactInfo.location} · Remote-friendly`
  }
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <span className="section-subtitle">Contact</span>
        <h2 className="section-title">Let&apos;s Build Something</h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-cta glass-card"
        >
          <h3 className="cta-title">Ready to scale your next project?</h3>
          <p className="cta-text">
            Specialized in enterprise Magento systems, warehouse automation, and
            high-performance backend architecture. Available for full-time roles,
            contracts, and consulting.
          </p>

          <div className="contact-channels">
            {channels.map((channel) =>
              channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="channel-card"
                  {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="channel-icon" aria-hidden="true">{channel.icon}</span>
                  <span className="channel-label">{channel.label}</span>
                  <span className="channel-value">{channel.value}</span>
                </a>
              ) : (
                <div key={channel.label} className="channel-card channel-static">
                  <span className="channel-icon" aria-hidden="true">{channel.icon}</span>
                  <span className="channel-label">{channel.label}</span>
                  <span className="channel-value">{channel.value}</span>
                </div>
              )
            )}
          </div>

          <div className="contact-actions">
            <a href={`mailto:${contactInfo.email}`} className="btn-primary">Get In Touch</a>
            <a href={contactInfo.resume} download className="btn-secondary">Download Resume</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
