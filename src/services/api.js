/* eslint-disable no-param-reassign */
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/dashboard/',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;
