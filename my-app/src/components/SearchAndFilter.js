import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // ✅ Make sure path is correct

function SearchAndFilter() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar /> {/* ✅ Place Navbar at the top */}
      <div className="search-and-filter-container">
        <h1 className="title">Timeless Moment Awaits</h1>
        <p className="subtitle">
          Plan Smarter, travel farther – explore real itineraries from real travelers.
        </p>

        {/* 🔍 Search Bar */}
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Enter city name or an activity you want to do"
          />
        </div>

        {/* 🧰 Filters */}
        <div className="filters">
          <label>
            Age:
            <select>
              <option value="">Select</option>
              <option value="">20-30</option>
              <option value="">30-40</option>
              <option value="">40-50</option>
              <option value="">50-60</option>
            </select>
          </label>

          <label>
            Group:
            <select>
              <option value="">Select</option>
              <option value="solo">Solo</option>
              <option value="family">Family</option>
              <option value="work">Work</option>
            </select>
          </label>

          <label>
            Season:
            <select>
              <option value="">Select</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
            </select>
          </label>

          <label>
            Budget:
            <select>
              <option value="">Select</option>
              <option value="">500-1000</option>
              <option value="">1000-2000</option>
              <option value="">2000-3000</option>
              <option value="">3000-4000</option>
              <option value="">4000-5000</option>
              <option value="">5000-6000</option>
            </select>
          </label>
        </div>

        <div className="button-wrapper">
          <button className="submit-button" onClick={() => navigate('/view-post')}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchAndFilter;
