/** 유저 정보 조회 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';
import type {TargetLevel} from '@/types/common';

export interface UserInfoResponse {
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  provider: string;
  targetLevel: TargetLevel;
  under14: boolean;
}

export const getUserInfo = async (): Promise<UserInfoResponse> => {
  const response = await api.get<UserInfoResponse>(API_ENDPOINTS.users.me);
  return response.data;
};
