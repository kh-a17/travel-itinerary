import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import HomePage from './components/HomePage';
import SearchAndFilter from './components/SearchAndFilter'; // ✅ import
import SubmissionFilters from './components/Submission-Filters/Submission-Filters';
import SubmitItinerary from './components/Submit-Itinerary/Submit-Itinerary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchAndFilter />} /> {/* ✅ route for your component */}
        <Route path="/post-filters" element={<SubmissionFilters />} />
        <Route path="/submit-itinerary" element={<SubmitItinerary />} />
      </Routes>
    </Router>
  );
}

export default App;
