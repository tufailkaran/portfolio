import { contactInfo } from '../../data/content';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta glass-card">
          <h2 className="cta-title">Ready to scale your next project?</h2>
          <p className="cta-text">
            Specialized in enterprise Magento systems, warehouse automation, 
            and high-performance backend architecture. Based in {contactInfo.location}.
          </p>
          <a href={`mailto:${contactInfo.email}`} className="btn-primary cta-btn">
            Get In Touch
          </a>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Muhammad Tufail — Senior Magento / Adobe Commerce Developer
          </p>
          <div className="footer-links">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${contactInfo.email}`}>Email</a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
