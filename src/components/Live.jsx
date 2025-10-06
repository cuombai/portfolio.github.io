import React, { useState, useEffect } from 'react';
import '../styles/Live.css';
import { FaPlay } from 'react-icons/fa';
import ReactDOM from 'react-dom';

const videoData = [
  {
    title: 'Rick Astley - Never Gonna Give You Up',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    link: 'https://www.youtube.com/embed/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ',
  },
  {
    title: 'Joe L Barnes - Good Shepherd',
    thumbnail: 'https://img.youtube.com/vi/6ekgNfCm_sY/0.jpg',
    link: 'https://www.youtube.com/embed/6ekgNfCm_sY?list=RD6ekgNfCm_sY',
  },
  {
    title: 'Kanye West - Selah',
    thumbnail: 'https://img.youtube.com/vi/6CNPg2IQoC0/0.jpg',
    link: 'https://www.youtube.com/embed/6CNPg2IQoC0?list=RD6CNPg2IQoC0',
  },
  {
    title: 'Modular School Systems',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg',
    link: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    title: 'Modular School Systems',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg',
    link: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    title: 'Modular School Systems',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg',
    link: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    title: 'Modular School Systems',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg',
    link: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    title: 'Modular School Systems',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/0.jpg',
    link: 'https://www.youtube.com/embed/VIDEO_ID_2',
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
  const autoplayLink = video.link.includes('?')
    ? `${video.link}&autoplay=1`
    : `${video.link}?autoplay=1`;
  setActiveVideo({ ...video, link: autoplayLink });
};

useEffect(() => {
  if (activeVideo) {
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  } else {
    document.body.classList.remove('modal-open');
    document.body.style.overflow = 'auto';
  }
}, [activeVideo]);

    

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

   

{activeVideo && ReactDOM.createPortal(
  <div className="video-overlay" onClick={closeVideo}>
    <div className="video-modal" onClick={(e) => e.stopPropagation()}>
      <iframe
        src={activeVideo.link.includes('?') ? `${activeVideo.link}&autoplay=1` : `${activeVideo.link}?autoplay=1`}
        title={activeVideo.title}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <button className="close-btn" onClick={closeVideo}>Close</button>
    </div>
  </div>,
  document.body
)}

    </section>
  );
};

export default Live;
