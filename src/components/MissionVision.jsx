import React from 'react';
import { useState } from 'react';
import '../styles/MissionVision.css';

const MissionVision = () => {
  const sections = [
    {
      title: 'Mission',
      content:
        'Empowering businesses to connect with online and global customers through smart, scalable web solutions.',
    },
    {
      title: 'Vision',
      content:
        'To be the leading catalyst for digital transformation, enabling every business to thrive globally.',
    },
    {
      title: 'Goals & Roadmap',
      content:
        'Build intuitive platforms, expand outreach tools, and deliver measurable growth for clients worldwide.',
    },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sections.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="mission-card">
      <button className="nav-btn left" onClick={handlePrev} aria-label="Previous">
        ◀
      </button>
      <div className="card-content">
        <h3>{sections[index].title}</h3>
        <p>{sections[index].content}</p>
      </div>
      <button className="nav-btn right" onClick={handleNext} aria-label="Next">
        ▶
      </button>
    </div>
  );
};

export default MissionVision;
