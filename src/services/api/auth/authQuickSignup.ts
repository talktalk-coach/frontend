/** 빠른 회원가입 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface QuickSignupRequest {
  email: string;
  password: string;
  nickname: string;
  targetLevel: string;
}

export const quickSignup = async (data: QuickSignupRequest) => {
  const response = await api.post(API_ENDPOINTS.auth.quickSignup, data);
  return response.data;
};
