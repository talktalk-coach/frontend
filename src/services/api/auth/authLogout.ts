/** 로그아웃 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const logout = async (): Promise<void> => {
  await api.post(API_ENDPOINTS.auth.logout);
};
