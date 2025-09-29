import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Elevate Your Online Presence with Godtek AI</h1>
        <p className="hero-subtitle">
          Expert web development solutions tailored to bring your vision to life.
        </p>
        <HashLink to="/#contact" className="hero-cta">
          Get Started
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;