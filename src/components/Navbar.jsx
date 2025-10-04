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
        <li><HashLink to="/#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</HashLink></li>
        <li><HashLink to="/#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</HashLink></li>
        <li><HashLink to="/#clients" className="nav-link" onClick={() => setIsOpen(false)}>Clients</HashLink></li>
        <li><HashLink to="/#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</HashLink></li>
        <li><Link to="/login" className="nav-link login-btn" onClick={() => setIsOpen(false)}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;