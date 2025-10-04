import React, {useState} from 'react';
import '../styles/AboutUs.css';

import BALI from '../images/BALI.png';
import CANADA from '../images/CANADA.png';
import EduAug from '../images/EduAug.png';
import EID2 from '../images/EID2.png';
import HAWAII from '../images/HAWAII.png';
import MMF30 from '../images/MMF30.png';
import MOTOR from '../images/MOTOR.png';
import ROME from '../images/ROME.png';

const aboutCards = [
  {
    title: 'Our Team',
    image: BALI,
    content: `At Godtek AI, our team is a dynamic blend of developers, designers, strategists, and communicators who share a common goal: helping businesses thrive online. Each member brings a unique skill set—from backend architecture and frontend design to outreach strategy and client support. We believe in collaboration, transparency, and continuous learning. Our team culture is rooted in curiosity and impact, and we’re proud to build solutions that are not only technically sound but also audience-ready. Whether we’re crafting a modular school platform or refining a clinic’s outreach messaging, our team works with precision and empathy to deliver results that matter.`,
  },
  {
    title: 'The Founder',
    image: CANADA,
    content: `Godtek AI was founded by a visionary developer with a passion for scalable systems and community impact. With roots in backend architecture and educational outreach, our founder built the company to bridge the gap between technical excellence and real-world usability. His experience spans insurance platforms, school systems, and public health messaging—always with a focus on clarity, modularity, and fairness. He believes technology should empower people, not confuse them. That ethos drives every decision at Godtek AI, from how we structure our code to how we communicate with clients. His leadership ensures that every project is grounded in purpose and built to last.`,
  },
  {
    title: 'Our Mission',
    image: EduAug,
    content: `Our mission is to empower businesses to connect with their audiences—locally and globally—through smart, scalable web solutions. We specialize in crafting platforms that are intuitive, responsive, and tailored to each client’s goals. Whether it’s a clinic in Kisumu or a startup in Nairobi, we help organizations elevate their online presence and reach the people who matter most. We believe in ethical design, transparent communication, and measurable impact. Our mission isn’t just about code—it’s about connection, clarity, and community. Every line we write and every layout we design is a step toward helping our clients grow.`,
  },
  {
    title: 'Our Vision',
    image: EduAug,
    content: `We envision a digital landscape where every business—regardless of size or location—can thrive online. At Godtek AI, our vision is to be a catalyst for digital transformation across Africa and beyond. We aim to build tools that are not only powerful but also accessible, adaptable, and audience-ready. Our long-term vision includes expanding our outreach frameworks, refining our modular systems, and partnering with organizations that share our values. We see a future where technology is a bridge, not a barrier—and we’re committed to building that future one project at a time.`,
  },
  {
    title: 'Our Goals',
    image: EID2,
    content: `Our goals are rooted in clarity, scalability, and impact. We aim to build platforms that serve real needs—from school systems that simplify role-based access to outreach tools that help clinics communicate effectively. We’re focused on refining our React components, optimizing backend flows, and crafting messaging that resonates. Our roadmap includes expanding our client base, deepening our community engagement, and continuously improving our technical stack. We believe that every goal should be measurable, defensible, and aligned with the needs of our users. That’s why we document our decisions, justify our costs, and build with purpose.`,
  },
  {
    title: 'Our Culture',
    image: HAWAII,
    content: `Godtek AI’s culture is built on professionalism, fairness, and curiosity. We value transparency in our pricing, clarity in our communication, and integrity in our work. Our team collaborates across disciplines, always seeking the most defensible solution. We celebrate learning, encourage feedback, and treat every bug or question as a chance to grow. Whether we’re negotiating compensation or refining a layout, we approach each task with humility and strategic thinking. Our culture isn’t just internal—it’s reflected in how we serve our clients and how we contribute to the broader tech ecosystem.`,
  },
  {
    title: 'Our Services',
    image: MMF30,
    content: `We offer a full suite of web development services tailored to help businesses grow. From custom website design and SEO optimization to e-commerce integration and outreach strategy, our services are modular and scalable. We work with clinics, schools, startups, and agencies to build platforms that are intuitive and impactful. Our development process includes audience analysis, responsive design, and secure backend flows. We also provide educational materials, cheat sheets, and guides to help clients understand and manage their platforms. At Godtek AI, service means more than delivery—it means partnership, clarity, and long-term success.`,
  },
  {
    title: 'Our Clients',
    image: MOTOR,
    content: `Our clients range from local clinics and schools to regional startups and agencies. We’re proud to serve organizations that value clarity, impact, and ethical design. Each client relationship is built on trust, transparency, and shared goals. We listen carefully, communicate clearly, and deliver solutions that meet real needs. Whether it’s a disaster management guide for a school board or a tax-compliant invoice system for a business, we tailor our work to fit the context. Our clients inspire us to keep improving, and their feedback shapes our roadmap.`,
  },
  {
    title: 'Our Impact',
    image: ROME,
    content: `We measure impact not just in code deployed, but in lives improved. Our platforms help clinics reach patients, schools manage roles, and businesses grow online. We’ve crafted outreach materials for public health, built systems for educational access, and supported compliance for Kenyan businesses. Our work is grounded in real-world needs and designed for long-term sustainability. We believe that technology should serve people—and we’re proud of the impact we’ve made in Kisumu and beyond. Every project is a chance to make a difference, and we take that responsibility seriously.`,
  },
];

const AboutUs = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="about-section">
      <h2 className="about-heading">About Us</h2>
      <div className="about-grid">
        {aboutCards.map((card, index) => (
          <div
            key={index}
            className="about-card"
            style={{ backgroundImage: `url(${card.image})` }}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-overlay">
              <h3>{card.title}</h3>
              <p>{card.content.slice(0, 120)}...</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedCard.title}</h3>
            <p>{selectedCard.content}</p>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
