/** axios 인스턴스 기본 설정 파일 */
import {API_BASE_URL} from '@/services/constant/endpoint';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

// 요청 인터셉터 (토큰 자동 첨부)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
});

// 응답 인터셉터 (에러 공통 처리)
api.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);
