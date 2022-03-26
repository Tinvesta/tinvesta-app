import axios, { AxiosRequestConfig } from 'axios';

const mapboxApiEndpoint = process.env.NEXT_PUBLIC_MAPBOX_URL;

export const mapboxAxiosConfig: AxiosRequestConfig = {
  timeout: 15_000,
  baseURL: mapboxApiEndpoint,
  timeoutErrorMessage: 'Request timeout.',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

const mapboxInstance = axios.create(mapboxAxiosConfig);

export const axiosInstance = mapboxInstance;
