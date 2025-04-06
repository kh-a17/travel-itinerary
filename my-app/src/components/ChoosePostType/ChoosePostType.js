import React from 'react';
import './ChoosePostType.css';
import travelVideo from '../../assets/Bg2.mp4';
import { useNavigate } from 'react-router-dom'; // ✅ import

const ChoosePostType = () => {
  const navigate = useNavigate(); // ✅

  return (
    <div className="home-background">
      {/* <video autoPlay muted loop playsInline className="bg-video">
        <source src={travelVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="home-container">
        <h1 className="home-title">Choose how you want to share your trip!</h1>
        {/* <p className="home-subtitle">Choose your path below and start your travel journey</p> */}

        <div className="card-grid">
          <div className="card viewer-card">
            <h2> Speak </h2>
            <button
              className="home-button"
              onClick={() => navigate('/speech-to-text')} // ✅ navigate to search
            >
              Speak out your Experience
            </button>
          </div>

          <div className="card post-card">
            <h2>Fill out a Form</h2>
            <button className="home-button"
                          onClick={() => navigate('/post-filters')} // ✅ navigate to search
                        >
              
              Post Your Experience</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePostType;
