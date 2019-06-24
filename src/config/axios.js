import axios from 'axios';

const authRequest = axios.create({ baseUrl: '/' });

const apiRequest = axios.create({ baseURL: '/api/' });

export { authRequest, apiRequest };
