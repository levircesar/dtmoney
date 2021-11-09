import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.PROD ?? 'http://localhost:3000/api'
})