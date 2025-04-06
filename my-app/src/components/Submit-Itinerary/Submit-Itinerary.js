import { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Submit-Itinerary.css';
import StarRating from '../StarRating/StarRating'
import FilterTile from '../filter-tile/FilterTile'
import InputBox from '../input-box/InputBox'

const SubmitItinerary = () => {
  const [noOfDays, selectNonOfDays] = useState([])
  const [formSubmit, setFormSubmit] = useState(false)
  const navigate = useNavigate();


  const nonOfDaysSelected = (noOfDaysSelect) => {
    const list = [];
    for (let i = 1; i <= noOfDaysSelect; i++) {
      list.push(i);
    }
    selectNonOfDays(list)
  }

  const onSubmit = () => {
    setFormSubmit(true)
    navigate('/post-type')
  }

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
              <InputBox placeholder='Please enter place' className='acco-input' />
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
                    <InputBox placeholder='Please enter place' />
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
