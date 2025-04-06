import { useState } from 'react';
import './SubmissionFilters.css';
import FilterTile from '../filter-tile/FilterTile'

const SubmissionFilters = () => {

  const [filter, selectFilter] = useState('age')
  const filterSelected = () => {
    if(filter === 'age'){
      selectFilter('group')
    }
    else if(filter === 'group'){
      selectFilter('season')
    }
    else if(filter === 'season'){
      selectFilter('budget')
    }
    else if(filter === 'budget'){
      console.log('redirect to submission post');
    }
  }

  return (
    <div className="submission-wrapper">
      <form>
        {filter === "age" && <div>
          <h1>Age</h1>
          <div class="filter-wrapper">
            <FilterTile filter="20-30" filterSelected={filterSelected} />
            <FilterTile filter="30-40" filterSelected={filterSelected} />
            <FilterTile filter="40-50" filterSelected={filterSelected} />
            <FilterTile filter="50-60" filterSelected={filterSelected} />
          </div>
        </div>}
        {filter === "group" && <div>
          <h1>Group</h1>
          <div class="filter-wrapper">
            <FilterTile filter="Solo" filterSelected={filterSelected} />
            <FilterTile filter="Family" filterSelected={filterSelected} />
            <FilterTile filter="Honeymoon" filterSelected={filterSelected} />
            <FilterTile filter="Work" filterSelected={filterSelected} />
            <FilterTile filter="Friends" filterSelected={filterSelected} />
          </div>
        </div>}
        {filter === "season" && <div>
          <h1>Season</h1>
          <div class="filter-wrapper">
            <FilterTile filter="Spring" filterSelected={filterSelected} />
            <FilterTile filter="Summer" filterSelected={filterSelected} />
            <FilterTile filter="Fall" filterSelected={filterSelected} />
            <FilterTile filter="Winter" filterSelected={filterSelected} />
          </div>
        </div>}
        {filter === "budget" && <div>
          <h1>Budget</h1>
          <div class="filter-wrapper">
            <FilterTile filter="500-1000" filterSelected={filterSelected} />
            <FilterTile filter="1000-2000" filterSelected={filterSelected} />
            <FilterTile filter="2000-3000" filterSelected={filterSelected} />
            <FilterTile filter="3000-4000" filterSelected={filterSelected} />
            <FilterTile filter="4000-5000" filterSelected={filterSelected} />
            <FilterTile filter="5000-6000" filterSelected={filterSelected} />
          </div>
        </div>}
      </form>
    </div>
  );
}

export default SubmissionFilters;
