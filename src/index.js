import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import PageTitle from './pageElements/PageTitle';

// For Page Title
ReactDOM.render(<PageTitle/>,document.getElementById('page__title'));


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,document.getElementById('web__content'));


