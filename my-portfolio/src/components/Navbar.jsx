import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Godtek Ai</div>
      <ul className="nav-links">
        <li><HashLink to="/#home" className="Home-btn">Home</HashLink></li>
        <li><HashLink to="/#services" className="Service-btn">Services</HashLink></li>
        <li><HashLink to="/#clients" className="Client-btn">Clients</HashLink></li>
        <li><HashLink to="/#contact" className="Contact-btn">Contact</HashLink></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
