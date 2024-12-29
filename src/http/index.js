import axios from 'axios';
import provedor from '@/provedor';

const http = axios.create({
  baseURL: 'http://localhost:8000',
  header: {
    Accept: 'application/json',
    Content: 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const token = provedor.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token} `;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default http;
