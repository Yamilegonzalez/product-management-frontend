import axios from 'axios'

const API_URL='http://localhost:8080/api';
export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 15000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response?.status === 401) {
    //   useAuthStore.getState().logout()
    // }
    return Promise.reject(error)
  },
)

