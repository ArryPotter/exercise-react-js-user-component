import React, { useState } from 'react';

const description = (
  <span style={{ textAlign: 'left', marginBottom: 20 }}>
    * <strong>REQUIREMENT</strong>: Complete search user feature.<br />
    * Show feature: Show all users from getUsers function for initial render<br />
    * Save feature: SAVE button should be enabled when user data are shown. If user click on SAVE button, call saveData functions for each user. show text indicate that process is done after completion.<br />
    * Filter feature: show all keys in dropdown to apply filter, user can add more than 1 filter by clicking Add Filter, after they are done adding filter, click Apply filter to filter the users<br />
  <br /><hr />
  </span>
);

const style = {
  wrapper: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 10 },
  row: { display: 'flex', flexDirection: 'row', alignItems: 'flex-start' },
  result: { margin: '15px 0'}
}
const resolveWithDelay = (result, time = 1) => new Promise(resolve => setTimeout(() => resolve(result), time * 1000));
const rejectWithDelay = (msg) => new Promise((resolve, reject) => setTimeout(() => reject(msg), 1000));
const userData = '[{"name":"John Doe","email":"john.doe@mail.com","type":"basic","number":1},{"name":"Johnny Deep","email":"j.deep@mail.com","type":"basic","number":3},{"name":"Nick Morgan","email":"nickmorgan@mail.com","type":"vip","number":6},{"name":"Martin J","email":"martin.john@mail.com","type":"basic","number":2},{"name":"Martin Wel","email":"martinw@mail.com","type":"vip","number":8},{"name":"Johnny Christian","email":"j.christ@mail.com","type":"vip","number":4},{"name":"Julian","email":"j.jo@mail.com","type":"vip","number":2},{"name":"Jason McMilan","email":"mcmilan@mail.com","type":"basic","number":9}]';

// Helper functions
const getUsers = async () => resolveWithDelay(JSON.parse(userData));
const saveData = async (singleUser) => resolveWithDelay(singleUser);

const FilterField = () => (
  <div style={style.row}>
    <select>
      <option value=''>Any</option>
    </select>
    <input type="text" placeholder='value' />
  </div>
)

const FilterSection = () => (
  <div style={style.wrapper}>
    <FilterField />
    <button>Add Filter</button>
    <button>Apply Filter</button>
  </div>
)

const FilterComponent = () => {

  return (
    <>
      {description}

      <FilterSection />
      <span style={style.result}>FILTER RESULT:</span>
      <br />
      <button disabled={true}>Save</button>
    </>
  )
}

export default FilterComponent;
