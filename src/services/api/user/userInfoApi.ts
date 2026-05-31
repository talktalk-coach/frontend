/** 유저 정보 조회 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';
import type {GradeCode} from '@/constants/difficulty';

export interface UserInfoResponse {
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  provider: string;
  targetLevel: GradeCode;
  under14: boolean;
}

export const getUserInfo = async (): Promise<UserInfoResponse> => {
  const response = await api.get<UserInfoResponse>(API_ENDPOINTS.users.me);
  return response.data;
};
