import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Speech-to-Text/SpeechToText.css';
import Navbar from '../Navbar'; // Navbar import

const VoiceInput = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported in your browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const handleSubmit = () => {
    // Optional: send transcript to backend
    navigate('/thank-you');
  };

  return (
    <>
      <Navbar /> {/* Add Navbar at the top */}
      <div className='speech-to-text-wrapper' style={{ paddingTop: '100px' }}>
        <h3>Speak Your Experience</h3>
        <button onClick={isListening ? stopListening : startListening} className='button-style'>
          {isListening ? '🛑 Stop Listening' : '🎙️ Start Listening'}
        </button>
        <textarea
          rows="10"
          cols="80"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder="Please suggest places to visit, restaurants and how to roam around"
          className='text-area'
        />
        <button className='submit-button' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default VoiceInput;
