import React, { useState } from 'react';
import '../styles/Live.css';
import { FaPlay } from 'react-icons/fa';

const videoData = [
  {
    title: '5th October Sermon ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    link: 'https://www.youtube.com/embed/Wf0MHAPmQdY',
  },
  {
    title: 'Modular School Systems',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg',
    link: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  // Add 8 more entries...
];

const Live = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoData.length) % videoData.length);
  };

  const openVideo = (video) => {
    setActiveVideo(video);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="live-section">
      <h2 className="live-heading">Live Showcase</h2>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevSlide}>‹</button>

        <div className="video-frame fade-in">
          <img src={videoData[currentIndex].thumbnail} alt="Video thumbnail" className="video-thumb" />
          <h3 className="video-title">{videoData[currentIndex].title}</h3>
          <button className="play-btn" onClick={() => openVideo(videoData[currentIndex])}>
            <FaPlay />
          </button>
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>›</button>
      </div>

      {activeVideo && (
        <div className="video-overlay" onClick={closeVideo}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={activeVideo.link}
              title={activeVideo.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={closeVideo}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Live;
