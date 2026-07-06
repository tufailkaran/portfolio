import { contactInfo } from '../../data/content';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Muhammad Tufail — Senior Magento / Adobe Commerce Developer
          </p>
          <div className="footer-links">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${contactInfo.email}`}>Email</a>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
