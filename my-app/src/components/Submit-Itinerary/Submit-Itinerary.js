import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Submit-Itinerary.css';
import StarRating from '../StarRating/StarRating'
import FilterTile from '../filter-tile/FilterTile'
import InputBox from '../input-box/InputBox'

const SubmitItinerary = () => {
  const [noOfDays, selectNonOfDays] = useState([])
  const [formSubmit, setFormSubmit] = useState(false)
  const [acco, setAcco] = useState('')
  const navigate = useNavigate();

  const nonOfDaysSelected = (noOfDaysSelect) => {
    const list = [];
    for (let i = 1; i <= noOfDaysSelect; i++) {
      list.push(i);
    }
    selectNonOfDays(list)
  }

  function handleDataFromChild(data) {
    setAcco(data);
    if(acco.length>0){
      localStorage.setItem('acco', acco)
    }
  }

  const prepareItineraryData = () => {
    const itinerary = noOfDays.map((day, index) => ({
      day_number: day,
      places_visited_each_day: [], // Assuming places visited for each day will be added dynamically
      restaurants: [],
      mode_of_transport: "", // Mode of transport for each day can be added dynamically
    }));

    // Return the entire object with the collected data
    return {
      city_name: "Paris", // You can replace this with actual data from localStorage or inputs
      age: localStorage.getItem('age'),
      group: localStorage.getItem('group'),
      season: localStorage.getItem('season'),
      budget: localStorage.getItem('budget'),
      accommodation: acco, // Get accommodation from the state
      no_of_days: noOfDays.length,
      itinerary: itinerary,
    };
  }

  const onSubmit = async () => {
    setFormSubmit(true);

    const itineraryData = prepareItineraryData();

    try {
      // Send the data to the backend via a POST request
      const response = await fetch('http://localhost:5000/api/posts/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(itineraryData), // Send data as JSON
      });

      // Check if the request was successful
      if (response.ok) {
        console.log('Itinerary posted successfully');
        navigate('/post-type');
      } else {
        console.error('Failed to submit itinerary');
      }
    } catch (error) {
      console.error('Error occurred while submitting itinerary:', error);
    }
  };

  return (
    <div className="submit-post-wrapper">
      {noOfDays.length <= 0 ?
        <>
          <h2>
            Number of days travelled:
          </h2>
          <div class="filter-wrapper">
            <FilterTile filter="1" filterSelected={() => nonOfDaysSelected(1)} className="square-tile" />
            <FilterTile filter="2" filterSelected={() => nonOfDaysSelected(2)} className="square-tile" />
            <FilterTile filter="3" filterSelected={() => nonOfDaysSelected(3)} className="square-tile" />
            <FilterTile filter="4" filterSelected={() => nonOfDaysSelected(4)} className="square-tile" />
            <FilterTile filter="5" filterSelected={() => nonOfDaysSelected(5)} className="square-tile" />
          </div>

          <h2>Accomodation</h2>
          <div>
            <div class="filter-wrapper">
              <InputBox placeholder='Please enter place' className='acco-input' sendDataToParent={handleDataFromChild} />
            </div>
          </div>
        </>
        :
        <div>
          <div class="day-wise-wrapper">
            {noOfDays.map((key) => {
              return (
                <div className='day-wrapper' style={{ width: `${100 / noOfDays.length}%` }}>
                  <div className='day-label'>Day {key}</div>
                  <form className='form-wrapper'>
                    <label>
                      Please list places visited in order:
                    </label>
                    <InputBox placeholder='Please enter place' sendDataToParent={handleDataFromChild} />
                    <StarRating />

                    <InputBox placeholder='Please enter place' />
                    <StarRating />

                    <InputBox placeholder='Please enter place' />
                    <StarRating />

                    <InputBox placeholder='Please enter place' />
                    <StarRating />

                    <InputBox placeholder='Please enter place' />
                    <StarRating />
                    <label>
                      Restaurants
                    </label>
                    <InputBox placeholder='Enjoy meals here' />
                    <InputBox placeholder='Enjoy meals here' />
                    <InputBox placeholder='Enjoy meals here' />
                    <label>
                      Mode of Transport
                    </label>
                    <InputBox placeholder='Roam around the cool way' />

                  </form>
                </div>
              )
            })}
          </div>
          <div className='filter-wrapper'>
            <button onClick={onSubmit} className='submit-button'>Submit Itinerary</button>
          </div>
        </div>
      }
    </div>
  );
}

export default SubmitItinerary;

 