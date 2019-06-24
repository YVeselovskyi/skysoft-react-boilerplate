import { authRequest } from 'config';

authRequest.interceptor.request.use(
  config => {
    // Do something if response's request is 200
    return config;
  },
  error => {
    // Do something if response's request !== 200 (401 not login)
    return Promise.reject(error);
  },
);

authRequest.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);
