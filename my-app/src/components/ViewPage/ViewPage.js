import React, { useState, useEffect } from 'react';
import './ViewPage.css';

const dummyData = [
  {
    username: 'John Doe',
    city: 'Paris',
    age: '20-30',
    group: 'Solo',
    season: 'Spring',
    budget: '1000-2000',
    days: [
      {
        day: 'Day 1',
        places: ['Eiffel Tower', 'Louvre Museum'],
        restaurants: ['Le Jules Verne', 'Chez Janou'],
        transport: 'Metro',
        topPlace: 'Eiffel Tower'
      },
      {
        day: 'Day 2',
        places: ['Montmartre', 'Notre-Dame'],
        restaurants: ['Le Consulat', 'Cafe Panis'],
        transport: 'Walking',
        topPlace: 'Montmartre'
      }
    ]
  },
  {
    username: 'Jane Smith',
    city: 'Paris',
    age: '20-30',
    group: 'Solo',
    season: 'Spring',
    budget: '1000-2000',
    days: [
      {
        day: 'Day 1',
        places: ['Sainte-Chapelle', 'Seine River'],
        restaurants: ['Le Petit Cler', 'Café de Flore'],
        transport: 'Bike',
        topPlace: 'Seine River'
      },
      {
        day: 'Day 2',
        places: ['Versailles Palace'],
        restaurants: ['Angelina', 'Le Train Bleu'],
        transport: 'Train',
        topPlace: 'Versailles Palace'
      }
    ]
  }
];

const ViewPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetch
    setPosts(dummyData);
  }, []);

  return (
    <div className="view-page">
      <div className="filter-bar-horizontal">
        <span><strong>City:</strong> Paris</span>
        <span><strong>Age:</strong> 20-30</span>
        <span><strong>Group:</strong> Solo</span>
        <span><strong>Season:</strong> Spring</span>
        <span><strong>Budget:</strong> 1000-2000</span>
      </div>

      <div className="user-cards">
        {posts.map((user, index) => (
          <div key={index} className="user-itinerary-card">
            <h2>{user.username}'s Itinerary</h2>
            <p><strong>City:</strong> {user.city}</p>
            {user.days.map((day, idx) => (
              <div key={idx} className="day-block">
                <h3>{day.day}</h3>
                <p><strong>Places Visited:</strong> {day.places.join(', ')}</p>
                <p><strong>Restaurants:</strong> {day.restaurants.join(', ')}</p>
                <p><strong>Mode of Transport:</strong> {day.transport}</p>
                <p><strong>Top-rated Place:</strong> ⭐ {day.topPlace}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPage;
