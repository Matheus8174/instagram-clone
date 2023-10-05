import axios from 'axios';

export const selfHost = axios.create({
  baseURL: 'http://localhost:3000/api'
});
