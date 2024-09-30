import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const CONTENT_TYPE = 'application/json';

const HEADER = {
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': CONTENT_TYPE
  }
};

export const Request = axios.create(HEADER as AxiosRequestConfig);
