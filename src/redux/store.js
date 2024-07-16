import { createStore } from 'redux';

const initialState = {
  countries: [
    "India", "United States", "China", "Brazil", "Australia",
    "Canada", "Russia", "Mexico", "Japan", "Germany",
    "France", "United Kingdom", "Italy", "South Korea",
    "Spain", "Indonesia", "Turkey", "Saudi Arabia",
    "South Africa", "Argentina"
  ],
  pageTitle: "Click a button to update the title"
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {
        ...state,
        pageTitle: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
