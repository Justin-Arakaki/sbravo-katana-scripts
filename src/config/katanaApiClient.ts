import axios, { AxiosInstance } from 'axios';
import getEnv from '../utils/getEnv';

const apiKey = getEnv('API_KEY');

const katanaApiClient: AxiosInstance = axios.create({
  baseURL: 'https://api.katanamrp.com/v1',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default katanaApiClient;
