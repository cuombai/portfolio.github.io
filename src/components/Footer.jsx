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
    <footer className="footer hidden">
      <div className="footer-content">
        <div className="footer-column">
          <span className="logo">Godtek AI</span>
          <span className="logo-subtext">Web Solutions for Clinics, Schools, and Startups</span>
          <p className="footer-description">
            Building scalable platforms and outreach tools that empower businesses across Kisumu and beyond.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><HashLink to="/#home">Home</HashLink></li>
            <li><HashLink to="/#services">Services</HashLink></li>
            <li><HashLink to="/#about">About Us</HashLink></li>
            <li><HashLink to="/#contact">Contact</HashLink></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: curtisombai@gmail.com</p>
          <p>Phone: +254 746 8814441</p>
          <p>Location: Kisumu, Kenya</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Godtek AI. All rights reserved.</p>
      </div>

      {/* Optional mobile menu toggle */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
    </footer>
  );
};

export default Footer;
