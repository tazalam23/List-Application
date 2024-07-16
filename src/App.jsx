// src/App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTitle } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const pageTitle = useSelector(state => state.pageTitle);

  const handleButtonClick = (title) => {
    dispatch(updateTitle(title));
  };

  return (
    <div className="App">
      <h1>{pageTitle}</h1>
      <div className="button-list">
        {countries.map((country, index) => (
          <button key={index} onClick={() => handleButtonClick(country)}>
            {country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
