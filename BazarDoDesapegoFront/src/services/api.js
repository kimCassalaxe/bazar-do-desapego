import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ip = "10.90.178.191";
const API_URL = `http://${ip}:3000`;
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
