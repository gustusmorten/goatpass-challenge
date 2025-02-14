import { getAsync, removeAsync } from '@/utils';
import axios from 'axios';

const baseURl = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: baseURl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const authData = await getAsync('auth');
  if (authData) {
    config.headers.Authorization = `Bearer ${authData?.token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
        console.error('Unauthorized, redirecting to login...');
        removeAsync('auth');
    }
    return Promise.reject(error);
  }
);

export const updateAuthToken = (newToken: string) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
  };
  
export default axiosInstance;