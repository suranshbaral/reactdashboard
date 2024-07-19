/* eslint-disable dot-notation */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// Retrieve authToken from localStorage
const authToken = localStorage.getItem('authToken');

// Set default Authorization header for Axios
if (authToken) {
  axios.defaults.headers.common['Authorization'] = `Token ${authToken}`;
}

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
