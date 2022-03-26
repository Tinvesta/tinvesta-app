import axios, { AxiosRequestConfig } from 'axios';

const MAPBOX_API_ENDPOINT = process.env.NEXT_PUBLIC_MAPBOX_URL;

export const mapboxAxiosConfig: AxiosRequestConfig = {
  timeout: 15_000,
  baseURL: MAPBOX_API_ENDPOINT,
  timeoutErrorMessage: 'Request timeout.',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

const mapboxInstance = axios.create(mapboxAxiosConfig);

export const axiosInstance = mapboxInstance;
