import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const service = e.target.service.value;

  const message = `Hello Curtis, I'm ${name}. My email is ${email} and phone is ${phone}. I'd like to get in touch via Godtek AI in regards to ${service}.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/254746881441?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
};


  return (
    <section className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="+254..."
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Choose Your Service
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="web-development">Web Development</option>
            <option value="software-development">Software Development</option>
          </select>
        </label>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
