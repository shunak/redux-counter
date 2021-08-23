import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

// Set initial state
const initialState = { count: 0 };
// Create Reducer function, counter for Action
const counter = (state = initialState, action: any) => {
 switch(action.type) {
    // In case "add_count" Action is published, update state and return it.
    case "add_count":
      const newCount = state.count + 1;
      return {
        count: newCount        
     }; 
     default:
       return state;
  }
};
// Pass the Reducer(counter) to createStore() function
const store = createStore(counter);

ReactDOM.render(
// Redux is valid by Folding App component by Provider.
// pass the store value created by createstore() function.
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
