import { useEffect, useState } from 'react';
import { contactInfo } from '../../data/content';
import './Navbar.css';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="container navbar-inner" aria-label="Main navigation">
        <a href="#top" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">MT</span>
          <span className="brand-name">Muhammad Tufail</span>
        </a>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`toggle-bar ${open ? 'bar-1-open' : ''}`} />
          <span className={`toggle-bar ${open ? 'bar-2-open' : ''}`} />
          <span className={`toggle-bar ${open ? 'bar-3-open' : ''}`} />
        </button>

        <div className={`navbar-links ${open ? 'navbar-links-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={contactInfo.resume}
            download
            className="navbar-cta"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
