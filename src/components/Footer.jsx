import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer">
      <div className="logo-container">
        <span className="logo">Godtek AI</span>
        <span className="logo-subtext">Web Solutions</span>
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><HashLink to="/#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</HashLink></li>
        <li><HashLink to="/#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</HashLink></li>
        <li><HashLink to="/#clients" className="nav-link" onClick={() => setIsOpen(false)}>Clients</HashLink></li>
        <li><HashLink to="/#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
        <li><Link to="/login" className="nav-link login-btn" onClick={() => setIsOpen(false)}>Login</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
