// src/lib/api.ts

import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // helpful if you're using cookies/session auth
});

// Optional: Interceptors for adding auth token or logging
api.interceptors.request.use(
  (config) => {
    // Example: Attach token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    // Optionally show a toast or redirect to login on 401
    return Promise.reject(error);
  }
);

export default api;
