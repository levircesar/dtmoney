import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://masterclass-node-api.herokuapp.com'
})