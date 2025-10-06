import React from 'react';
import '../styles/ServicesOffered.css';

const services = [
  {
    title: 'Graphic Design',
    description:
      'We craft visually compelling designs for brands, clinics, schools, and campaigns. From logos to outreach posters, our work is audience-ready and impact-driven.',
    icon: '/images/design-icon.png',
  },
  {
    title: 'Web Development',
    description:
      'We build responsive, scalable websites tailored to your business goals. Whether it’s a school platform or a clinic portal, our React-based frontends deliver clarity and performance.',
    icon: '/images/web-icon.png',
  },
  {
    title: 'Software Development',
    description:
      'From backend architecture to secure authentication flows, we engineer robust systems that grow with your business. Our modular approach ensures maintainability and transparency.',
    icon: '/images/code-icon.png',
  },
];

const ServicesOffered = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Services We Offer</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;
