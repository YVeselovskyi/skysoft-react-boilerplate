import axios from 'axios';

export const authRequest = axios.create({ baseUrl: '/' });

export const apiRequest = axios.create({ baseURL: '/api/' });
