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
  );
}

export default App;
