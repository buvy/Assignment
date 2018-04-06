import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Routes from './routes';
import ItemReducer from "./Reducers/Item.Reducer";
import './CSS/FoodDetails.css';
import './CSS/Item.css';

let store = createStore(ItemReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
       <Routes />
  </Provider>,
  document.getElementById('root')
);
