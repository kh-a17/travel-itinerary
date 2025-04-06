import React from 'react';

function Filters() {
  return (
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
  );
}

export default Filters;
