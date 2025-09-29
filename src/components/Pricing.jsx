import React from 'react';
import '../styles/Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-content">
        <h2 className="pricing-title">Our Pricing Plans</h2>
        <p className="pricing-subtitle">
          Choose the perfect plan to bring your vision to life with our expert web development services.
        </p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="card-title">Basic</h3>
            <p className="card-price">$499<span>/one-time</span></p>
            <ul className="card-features">
              <li>Single Page Website</li>
              <li>Responsive Design</li>
              <li>Basic SEO Optimization</li>
              <li>1 Month Support</li>
            </ul>
            <a href="/#contact" className="card-cta">Choose Plan</a>
          </div>
          <div className="pricing-card featured">
            <h3 className="card-title">Pro</h3>
            <p className="card-price">$999<span>/one-time</span></p>
            <ul className="card-features">
              <li>Up to 5 Pages</li>
              <li>Responsive Design</li>
              <li>Advanced SEO Optimization</li>
              <li>3 Months Support</li>
              <li>Basic Analytics Integration</li>
            </ul>
            <a href="/#contact" className="card-cta">Choose Plan</a>
          </div>
          <div className="pricing-card">
            <h3 className="card-title">Enterprise</h3>
            <p className="card-price">Custom<span>/quote</span></p>
            <ul className="card-features">
              <li>Custom Website Design</li>
              <li>Full Responsive Design</li>
              <li>Advanced SEO & Analytics</li>
              <li>6 Months Support</li>
              <li>E-commerce Integration</li>
            </ul>
            <a href="/#contact" className="card-cta">Get Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;