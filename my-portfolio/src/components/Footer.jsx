import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo">Godtek AI</span>
          <span className="logo-subtext">Web Solutions</span>
        </div>
        <div className="footer-links">
          <HashLink to="/#home" className="footer-link">Home</HashLink>
          <HashLink to="/#services" className="footer-link">Services</HashLink>
          <HashLink to="/#clients" className="footer-link">Clients</HashLink>
          <HashLink to="/#contact" className="footer-link">Contact</HashLink>
        </div>
        <div className="social-links">
          <a href="https://twitter.com" className="social-link">Twitter</a>
          <a href="https://linkedin.com" className="social-link">LinkedIn</a>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2025 Godtek AI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;