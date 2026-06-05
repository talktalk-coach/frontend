/** 회원 탈퇴 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const deleteUser = async (): Promise<void> => {
  await api.delete(API_ENDPOINTS.users.me);
};
