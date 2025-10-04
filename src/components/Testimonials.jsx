import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: 'Dr. Achieng Otieno',
    role: 'Clinic Director, Kisumu Wellness',
    message:
      'Godtek AI transformed our outreach strategy. Their platform helped us reach more patients with clarity and professionalism. The design is intuitive, and their team is incredibly responsive.',
    avatar: '/images/achieng.jpg',
  },
  {
    name: 'Samuel Mwangi',
    role: 'Founder, EduAug Kenya',
    message:
      'We needed a modular school system that could scale—and Godtek delivered. Their React-based frontend is clean, fast, and tailored to our needs. Highly recommend their work.',
    avatar: '/images/samuel.jpg',
  },
  {
    name: 'Fatma Yusuf',
    role: 'Operations Lead, Medipharm One',
    message:
      'From email routing to invoice compliance, Godtek AI handled it all with precision. Their technical documentation and cost breakdowns made stakeholder approval seamless.',
    avatar: '/images/fatma.jpg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000); // auto-rotate every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonial-card">
        <img src={testimonials[current].avatar} alt={testimonials[current].name} className="testimonial-avatar" />
        <p className="testimonial-message">“{testimonials[current].message}”</p>
        <h4 className="testimonial-name">{testimonials[current].name}</h4>
        <span className="testimonial-role">{testimonials[current].role}</span>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
