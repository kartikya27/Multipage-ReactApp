import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageTitle from './pageElements/PageTitle';

// For Page Title
ReactDOM.render(<PageTitle/>,document.getElementById('page__title'));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,document.getElementById('web__content'));


