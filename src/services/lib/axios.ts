/** axios 인스턴스 기본 설정 파일 */
import axios from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  removeTokens,
} from '@/utils/auth/token';
import {ROUTES} from '@/constants/routes';

export const api = axios.create({
  baseURL: '/',
  headers: {'Content-Type': 'application/json'},
});

// 요청 인터셉터 (토큰 자동 첨부)
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
});

// 응답 인터셉터 (401 시 토큰 갱신 후 재요청)
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        removeTokens();
        window.location.href = '/login';
        return Promise.reject(error);
      }

      try {
        const {data} = await axios.post('/api/auth/refresh', {refreshToken});
        setTokens(data.accessToken, data.refreshToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(originalRequest);
      } catch {
        removeTokens();
        window.location.href = ROUTES.LOGIN;
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
