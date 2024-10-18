import axios from 'axios';
import { useAuth } from './AuthContext';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/auth/login',
});

// Add request interceptor to attach token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Handle token expiration in response interceptor
axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    // Handle token expiration (redirect to login or refresh token)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';  // Redirect to login
  }
  return Promise.reject(error);
});

export default axiosInstance;
