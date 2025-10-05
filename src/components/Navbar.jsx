import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo">Godtek AI</span>
        <span className="logo-subtext">Web Solutions</span>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><HashLink to="/portfolio.github.io/#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</HashLink></li>
        <li><HashLink to="portfolio.github.io//#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</HashLink></li>
        <li><HashLink to="portfolio.github.io//#clients" className="nav-link" onClick={() => setIsOpen(false)}>Clients</HashLink></li>
        <li><HashLink to="portfolio.github.io//#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
        <li><Link to="portfolio.github.io//login" className="nav-link login-btn" onClick={() => setIsOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;