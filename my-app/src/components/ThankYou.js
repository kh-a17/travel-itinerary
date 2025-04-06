import React from 'react';
import './ThankYou.css';
import bgVideo from '../assets/Bg2.mp4'; // ✅ adjust if needed

const ThankYou = () => {
  return (
    <div className="thank-you-wrapper">
     <video autoPlay muted loop playsInline className="thankyou-video">
  <source src={bgVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>


      <div className="thank-you-container">
        <h1>Thank You!</h1>
        <p>Your travel experience has been submitted successfully.</p>
        <p>
          We appreciate your contribution in helping fellow travelers explore better!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
