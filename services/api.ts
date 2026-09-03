// services/api.ts
import axios, {create} from 'axios';
import { tokenService } from './tokenService';

const API_BASE_URL = 'http://localhost:3000'; 

const api = create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Request Interceptor: Attach Access Token to every outgoing request
api.interceptors.request.use(
  async (config) => {
    const accessToken = await tokenService.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 2. Response Interceptor: Catch 401s and attempt to refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if error is 401 Unauthorized and request hasn't been retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await tokenService.getRefreshToken();
        
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        // Call your backend endpoint to swap refresh token for new access token
        const refreshResponse = await axios.post(`${API_BASE_URL}/user/refresh`, {
          refreshToken,
        });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = refreshResponse.data;

        // Save new tokens
        await tokenService.saveTokens(newAccessToken, newRefreshToken || refreshToken);

        // Update authorization header and retry original failed request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);

      } catch (refreshError) {
        // Refresh token failed or expired -> Force user logout
        await tokenService.clearTokens();
        
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;