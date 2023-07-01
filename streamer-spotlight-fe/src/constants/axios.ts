import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BE_URL,
};

const api: AxiosInstance = axios.create(axiosConfig);

export default api;
