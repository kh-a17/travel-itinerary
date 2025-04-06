<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import HomePage from './components/HomePage';
import SearchAndFilter from './components/SearchAndFilter'; // ✅ import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchAndFilter />} /> {/* ✅ route for your component */}
      </Routes>
    </Router>
=======
import React from 'react'
import './App.css';
// import SubmissionFilters from './components/Submission-Filters/Submission-Filters'
import SubmitItinerary from './components/Submit-Itinerary/Submit-Itinerary'
import Dictaphone from "./components/Speech-to-Text/SpeechToText"

function App() {
  return (
    <div className="App">
      <SubmitItinerary />
    </div>
>>>>>>> 228346080ba05ccc0bedb6b79b03c6a7d6cc277a
  );
}

export default App;
