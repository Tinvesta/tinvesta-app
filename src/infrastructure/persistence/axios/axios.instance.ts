import axios, { AxiosRequestConfig } from 'axios';

const mapboxApiEndpoint = process.env.NEXT_PUBLIC_MAPBOX_URL;
const apiRouteSecret = process.env.NEXT_PUBLIC_API_ROUTE_SECRET;

const baseAxiosConfig: AxiosRequestConfig = {
  timeout: 15_000,
  timeoutErrorMessage: 'Request timeout.',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export const mapboxAxiosConfig: AxiosRequestConfig = {
  ...baseAxiosConfig,
  baseURL: mapboxApiEndpoint,
};

export const nextAxiosConfig: AxiosRequestConfig = {
  ...baseAxiosConfig,
  headers: {
    ...baseAxiosConfig.headers,
    authorization: apiRouteSecret,
  },
};

export const nextAxiosInstance = axios.create(nextAxiosConfig);
export const mapboxAxiosInstance = axios.create(mapboxAxiosConfig);
